import React, { useState } from 'react';
import PW from 'play-what';

import './PlaybackControls.css';
import ButtonInput from 'play-what-react-viewers/src/UI/ButtonInput/ButtonInput';
import ScalarInput from 'play-what-react-viewers/src/UI/ScalarInput/ScalerInput';
import { useRecoilState } from 'recoil';
import { positionState, sourceState, inputModeState } from '../Stage/State';
import AUTUMN_LEAVES from '../Common/AutumnLeaves';
import { useRecoilValue } from 'recoil';

const DEFAULT_NOTE = { a: [0, 0], B: [[0, 0]] };
const DEFAULT_SONG = AUTUMN_LEAVES;
const DEFAULT_TEMPO = 120;
const NOP = () => null;

const useToggle = (initValue = false) => {
    const [value, setValue] = useState(initValue);
    return [value, () => setValue(!value)];
};

const getNextPosition = (source, position) => {
    const inputMode = useRecoilValue(inputModeState);
    switch (inputMode.id) {
        case 'concept':
            return null;
        case 'progression':
            const isLast = position === source.cols.length - 1;
            return isLast ? 0 : position + 1;
        case 'chart':
            const [s, r, c] = position;
            const isLastSection = s === source.sections.length - 1;
            const isLastRow = r === source.sections[s].rows.length - 1;
            const isLastCol = c === source.sections[s].rows[r].cols.length - 1;
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
    }

};

const getCol = (source, position) => {
    const inputMode = useRecoilValue(inputModeState);
    switch (inputMode.id) {
        case 'concept':
            return source;
        case 'progression':
            return source.cols[position];
        case 'chart':
            const [s, r, c] = position;
            const section = source.sections[s];
            const row = section.rows[r];
            const col = row.cols[c];
            return col;
    }
}

const PlaybackControls = () => {

    const [position, setPosition] = useRecoilState(positionState);

    // Full data
    const source = useRecoilValue(sourceState);
    // State (Compound)
    const [state, setState] = useState([0, getCol(source, position).t]);
    // State helpers
    const [beatIndex, remBeats] = state;
    const col = getCol(source, position);
    const nextPosition = getNextPosition(source, position);
    const nextCol = getCol(source, nextPosition);
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
            setTimeout(() => {
                setPosition(nextPosition);
                setState([beatIndex + 1, nextCol.t]);
            }, beatDuration * 1000)
            console.log(beatIndex, remBeats, '>', state);
        }
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