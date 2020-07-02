import React, { useState } from 'react';
import PW from 'play-what';

import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import SwitchInput from '../../UI/SwitchInput/SwitchInput';
import InputBlock from '../../UI/InputBlock/InputBlock';
import LabeledInput from '../../UI/LabeledInput/LabeledInput';
import useNoteContext from '../../Utils/NoteContext';
import ButtonInput from '../../UI/ButtonInput/ButtonInput';

import './PlaybackControls.css';

const PlaybackControls = () => {
    const { playing, togglePlay, tempo, setTempo, beatIndex } = useNoteContext();
    return (
        <InputBlock>
            <div className='playback-controls'>
                <ButtonInput className='pw-secondary' onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</ButtonInput>
                <ScalarInput value={tempo} setValue={setTempo} />
                <div className={`blinker ${beatIndex % 2 === 0 ? 'pulse' : ''}`} />
            </div>
        </InputBlock>
    );
}

export default PlaybackControls;