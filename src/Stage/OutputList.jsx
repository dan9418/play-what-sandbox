import React, { useState } from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
const { Fretboard, Keyboard } = Viewers;

import { useRecoilValue } from 'recoil';
import { conceptState } from '../Common/State';
import ConceptPreview from './ConceptPreview';

const VIEWERS = {
    fretboard: {
        id: 'fretboard',
        name: 'Fretboard',
        component: Fretboard.Viewer
    },
    keyboard: {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard.Viewer
    }
};

const getViewers = concept => {
    return concept.outputs && concept.outputs.length ? concept.outputs.map((o, i) => {
        const { viewerId, ...props } = o;
        const Comp = VIEWERS[viewerId].component;
        return <Comp key={viewerId} concept={concept} {...props} />;
    }) : null;
}

const Stage = () => {

    const concept = useRecoilValue(conceptState);

    return (
        <div className="output-list pw-light">
            <ConceptPreview />
            {getViewers(concept)}
        </div>
    );
}

export default Stage;
