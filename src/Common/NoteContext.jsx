import React, { useState, createContext, useContext } from 'react';
import PW from 'play-what';
import AUTUMN_LEAVES from './AutumnLeaves';

const DEFAULT_NOTE = { a: [0, 0], B: [[0, 0]] };
const DEFAULT_SONG = AUTUMN_LEAVES;
const DEFAULT_TEMPO = 120;
const NOP = () => null;

const DEFAULT_NOTE_CONTEXT = {
    // Full data
    song: { sections: [{ rows: [{ cols: [DEFAULT_NOTE] }] }] },
    // State
    state: [0, 0, 0, 0, 0],
    // State helpers
    position: [0, 0, 0],
    setPosition: NOP,
    sectionIndex: 0,
    section: { rows: [] },
    rowIndex: 0,
    row: { cols: [] },
    colIndex: 0,
    col: DEFAULT_NOTE,
    note: DEFAULT_NOTE,
    setNote: NOP,
    nextNote: DEFAULT_NOTE,
    // Playback
    tempo: DEFAULT_TEMPO,
    setTempo: NOP,
    playing: NOP,
    togglePlay: NOP
};

const NoteContext = createContext(DEFAULT_NOTE_CONTEXT);
NoteContext.displayName = 'NoteContext';

const useToggle = (initValue = false) => {
    const [value, setValue] = useState(initValue);
    return [value, () => setValue(!value)];
};

/*const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => savedCallback.current();
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};*/

const getNextPosition = (song, [s, r, c]) => {
    const isLastSection = s === song.sections.length - 1;
    const isLastRow = r === song.sections[s].rows.length - 1;
    const isLastCol = c === song.sections[s].rows[r].cols.length - 1;
    if (isLastCol) {
        if (isLastRow) {
            if (isLastSection) {
                return [0, 0, 0];
            }
            return [s + 1, 0, 0];
        }
        return [s, r + 1, 0];
    }
    return [s, r, c + 1];
};

const getCol = (song, s, r, c) => {
    const section = song.sections[s];
    const row = section.rows[r];
    const col = row.cols[c];
    return col;
}

export const NoteContextProvider = props => {

    // Full data
    const [song, setSong] = useState(DEFAULT_SONG);
    // State (Compound)
    const [state, setState] = useState([0, 0, 0, 0, getCol(song, 0, 0, 0).t]);
    // State helpers
    const [sectionIndex, rowIndex, colIndex, beatIndex, remBeats] = state;
    const position = [sectionIndex, rowIndex, colIndex];
    const section = song.sections[sectionIndex];
    const row = section.rows[rowIndex];
    const col = row.cols[colIndex];
    const nextPosition = getNextPosition(song, position);
    const nextCol = getCol(song, ...nextPosition)
    // Playback
    const [tempo, setTempo] = useState(DEFAULT_TEMPO);
    const [playing, togglePlay] = useToggle(false);

    if (!playing) {
        PW.Sound.stopNotes();
    }
    else {
        const beatDuration = 1 / (tempo / 60);
        if (remBeats === col.t) {
            const notes = PW.Theory.addVectorsBatch(col.a, col.B);
            const freqs = PW.Theory.getFrequencies(notes);
            const pulseDuration = beatDuration * col.t; // seconds
            PW.Sound.playNotes(freqs, pulseDuration / 2);
            console.log(beatIndex, 'P');
        }
        if (remBeats > 1) {
            setTimeout(() => {
                setState([...position, beatIndex + 1, remBeats - 1]);
            }, beatDuration * 1000);
            console.log(beatIndex, remBeats, '-', state);
        }
        else if (remBeats === 1) {
            const nextPosition = getNextPosition(song, state);
            const nextCol = getCol(song, ...nextPosition);
            setTimeout(() => {
                setState([...nextPosition, beatIndex + 1, nextCol.t]);
            }, beatDuration * 1000)
            console.log(beatIndex, remBeats, '>', state);
        }
    }

    const setNote = note => {
        const songCopy = { ...song };
        const col = getCol(songCopy, ...position);
        col = note;
        setSong(songCopy);
    }
    const setPosition = (s, r, c) => {
        const col = getCol(song, s, r, c);
        setState([s, r, c, 0, col.t]);
    }

    const routeContextValue = {
        // Full data
        song,
        // State
        state,
        // State helpers
        position,
        setPosition,
        sectionIndex,
        section,
        rowIndex,
        row,
        colIndex,
        col,
        note: col,
        setNote,
        nextNote: nextCol,
        beatIndex,
        remBeats,
        // Playback
        tempo,
        setTempo,
        playing,
        togglePlay
    };
    return <NoteContext.Provider value={routeContextValue}>{props.children}</NoteContext.Provider>;
};

export const NoteContextConsumer = NoteContext.Consumer;

const useNoteContext = () => useContext(NoteContext);

export default useNoteContext;

