import React, { useState } from 'react';
import PW from 'play-what';

import './PlaybackControls.css';
import ButtonInput from 'play-what-react-viewers/src/UI/ButtonInput/ButtonInput';
import ScalarInput from 'play-what-react-viewers/src/UI/ScalarInput/ScalerInput';
import { useRecoilState } from 'recoil';
import { positionState, nextConceptState, conceptState, nextPositionState } from '../../Common/State';
import { useRecoilValue } from 'recoil';

const DEFAULT_NOTE = { a: [0, 0], B: [[0, 0]] };
const DEFAULT_TEMPO = 160;
const NOP = () => null;

const useToggle = (initValue = false) => {
    const [value, setValue] = useState(initValue);
    return [value, () => setValue(!value)];
};

const PlaybackControls = () => {

    const [position, setPosition] = useRecoilState(positionState);
    const concept = useRecoilValue(conceptState);
    const nextConcept = useRecoilValue(nextConceptState);
    const nextPosition = useRecoilValue(nextPositionState);
    // State (Compound)
    const [state, setState] = useState([0, concept.t]);
    // State helpers
    const [beatIndex, remBeats] = state;
    // Playback
    const [tempo, setTempo] = useState(DEFAULT_TEMPO);
    const [playing, togglePlay] = useToggle(false);


    if (!playing) {
        PW.Sound.stopNotes();
    }
    else {
        const beatDuration = 1 / (tempo / 60);
        if (remBeats === concept.t) {
            const notes = PW.Theory.addVectorsBatch(concept.a, concept.B);
            const freqs = PW.Theory.getFrequencies(notes);
            const pulseDuration = beatDuration * concept.t; // seconds
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
                setState([beatIndex + 1, nextConcept.t]);
            }, beatDuration * 1000)
            console.log(beatIndex, remBeats, '>', state);
        }
    }

    return (
        <div className='playback-controls'>
            <div className={`blinker ${beatIndex % 2 === 0 ? 'pulse' : ''}`} />
            <div>
                <ScalarInput value={tempo} setValue={setTempo} /> bpm
            </div>
            <ButtonInput className='pw-secondary' onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</ButtonInput>
        </div>
    );
}

export default PlaybackControls;