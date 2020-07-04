import React, { useState } from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
import { useRecoilValue } from 'recoil';
import { conceptState, inputModeState, sourceState, positionState } from './State';
import { useResetRecoilState } from 'recoil';

const { Fretboard, Keyboard } = Viewers.Modules;

const Stage = () => {

    //const [inputMode, setInputMode] = useResetRecoilState(inputModeState);
    //const [source, setSource] = useRecoilState(sourceState);
    //const [position, setPosition] = useRecoilState(positionState);
    const concept = useRecoilValue(conceptState);

    return (
        <div className="output-list">
            <Fretboard concept={concept} />
            <Keyboard concept={concept} />
        </div>
    );
}

export default Stage;
