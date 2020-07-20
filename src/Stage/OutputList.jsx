import React, { useState } from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
const { Fretboard, Keyboard } = Viewers;

import { useRecoilValue } from 'recoil';
import { conceptState, activeScopeState, ZOOM } from '../Common/State';
import ConceptPreview from './ConceptPreview';
import { OUTPUTS } from '../Common/Presets';
import { Chart } from './Chart/Chart';

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
        let config = o;
        if (typeof o === 'string') {
            config = OUTPUTS.find(x => x.outputId === o);
        }
        const { viewerId, args } = config;
        const Comp = VIEWERS[viewerId].component;
        return <Comp key={viewerId} concept={concept} {...args} />;
    }) : null;
}

const Stage = () => {

    const activeScope = useRecoilValue(activeScopeState);

    return (
        <div className="output-list pw-light">
            <Chart zoom={activeScope.scope} />
            {/*getViewers(concept)*/}
        </div>
    );
}

export default Stage;
