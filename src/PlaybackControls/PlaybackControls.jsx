import React, { useState } from 'react';
import PW from 'play-what';

import useNoteContext from '../Common/NoteContext';

import './PlaybackControls.css';
import ButtonInput from 'play-what-react-viewers/src/UI/ButtonInput/ButtonInput';
import ScalarInput from 'play-what-react-viewers/src/UI/ScalarInput/ScalerInput';
import { useRecoilValue, atom } from 'recoil';
import { noteState } from '../Stage/Stage';


const PlaybackControls = () => {
    const { playing, togglePlay, tempo, setTempo, beatIndex } = useNoteContext();
    const x = useRecoilValue(noteState);
    return (
        <div className='playback-controls'>
            {x}
            <ButtonInput className='pw-secondary' onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</ButtonInput>
            <ScalarInput value={tempo} setValue={setTempo} />
            <div className={`blinker ${beatIndex % 2 === 0 ? 'pulse' : ''}`} />
        </div>
    );
}

export default PlaybackControls;