import React, { useState } from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
import { useRecoilValue } from 'recoil';
import { conceptState } from './State';

const { Fretboard, Keyboard } = Viewers.Modules;

const Stage = () => {

    const concept = useRecoilValue(conceptState);

    return (
        <div className="output-list">
            <Fretboard concept={concept} />
            <Keyboard concept={concept} />
        </div>
    );
}

export default Stage;
