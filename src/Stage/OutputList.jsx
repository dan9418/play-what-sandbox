import React, { useState } from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
const { Fretboard, Keyboard } = Viewers;

import { useRecoilValue } from 'recoil';
import { conceptState } from '../Common/State';
import ConceptPreview from './ConceptPreview';



const Stage = () => {

    const concept = useRecoilValue(conceptState);

    const fretboardProps = concept.outputs && concept.outputs.fretboard || {};

    return (
        <div className="output-list pw-light">
            <ConceptPreview />
            <h2>Fretboard</h2>
            <Fretboard.Viewer concept={concept} {...fretboardProps} />
            <h2>Keyboard</h2>
            <Keyboard.Viewer concept={concept} />
        </div>
    );
}

export default Stage;
