import React, { useState } from 'react';
import PW from 'play-what';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import ScalarInput from '../UI/ScalarInput/ScalerInput';
import './PlaybackControls.css';
import { useRecoilState } from 'recoil';
import { positionState, nextConceptState, conceptState, nextPositionState } from '../Common/State';
import { useRecoilValue } from 'recoil';

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
            const freqs = PW.Theory.getFrequencies(concept.C);
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
            <ButtonInput className='pw-secondary' onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</ButtonInput>
            <h3>Tempo</h3>
            <div className="left">
                <ScalarInput value={tempo} setValue={setTempo} className="bpm" />
                <span className="bpm">bpm</span>
            </div>
            <h3>Metronome</h3>
            <h3>Volume</h3>
            <h3>Voice</h3>
        </div>
    );
}

export default PlaybackControls;