import React, { useState } from 'react';
import './Stage.css';

import Fretboard from 'play-what-react-viewers/src/Modules/Fretboard/Fretboard';
import { useRecoilValue } from 'recoil';
import { noteState, inputModeState, sourceState, positionState } from './State';
import { useResetRecoilState } from 'recoil';

const Stage = () => {

    //const [inputMode, setInputMode] = useResetRecoilState(inputModeState);
    //const [source, setSource] = useRecoilState(sourceState);
    //const [position, setPosition] = useRecoilState(positionState);
    const concept = useRecoilValue(noteState);

    return (
        <div className="output-list">
            <Fretboard concept={concept} />
        </div>
    );
}

export default Stage;
