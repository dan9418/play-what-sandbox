import React, { useState } from 'react';
import PW from 'play-what';

import './PlaybackControls.css';
import ButtonInput from 'play-what-react-viewers/src/UI/ButtonInput/ButtonInput';
import ScalarInput from 'play-what-react-viewers/src/UI/ScalarInput/ScalerInput';
import { useRecoilState } from 'recoil';
import { positionState } from '../Stage/State';
import AUTUMN_LEAVES from '../Common/AutumnLeaves';

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

const useToggle = (initValue = false) => {
    const [value, setValue] = useState(initValue);
    return [value, () => setValue(!value)];
};

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

const PlaybackControls = () => {

    const [position, setPosition] = useRecoilState(positionState);
    const [sectionIndex, rowIndex, colIndex] = position;

    // Full data
    const [song, setSong] = useState(DEFAULT_SONG);
    // State (Compound)
    const [state, setState] = useState([0, getCol(song, 0, 0, 0).t]);
    // State helpers
    const [beatIndex, remBeats] = state;
    const section = song.sections[sectionIndex];
    const row = section.rows[rowIndex];
    const col = row.cols[colIndex];
    const nextPosition = getNextPosition(song, position);
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
                setState([beatIndex + 1, remBeats - 1]);
            }, beatDuration * 1000);
            console.log(beatIndex, remBeats, '-', state);
        }
        else if (remBeats === 1) {
            const nextPosition = getNextPosition(song, position);
            const nextCol = getCol(song, ...nextPosition);
            setTimeout(() => {
                setState([beatIndex + 1, nextCol.t]);
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


    return (
        <div className='playback-controls'>
            <ButtonInput className='pw-secondary' onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</ButtonInput>
            <ScalarInput value={tempo} setValue={setTempo} />
            <div className={`blinker ${beatIndex % 2 === 0 ? 'pulse' : ''}`} />
        </div>
    );
}

export default PlaybackControls;