import React, { useState } from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
import { useRecoilValue } from 'recoil';
import { conceptState } from '../Common/State';
import ConceptPreview from './ConceptPreview';

const { Fretboard, Keyboard } = Viewers.Modules;

const Stage = () => {

    const concept = useRecoilValue(conceptState);

    return (
        <div className="output-list pw-light">
            <ConceptPreview />
            <Fretboard concept={concept} />
            <Keyboard concept={concept} />
        </div>
    );
}

export default Stage;
