import React, { useState } from 'react';
import './Stage.css';
import PW from 'play-what';

import Viewers from 'play-what-react-viewers';
const { Fretboard, Keyboard } = Viewers;

import { useRecoilValue, useRecoilState } from 'recoil';
import { conceptState } from '../Common/State';
import ConceptPreview from './ConceptPreview';
import { OUTPUTS } from '../Common/Presets';
import Chart from './Chart/Chart';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import LevelHeader from './LevelHeader';

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

const ConceptViewer = ({ conceptConfig }) => {
    return <div>{conceptConfig.outputs.map((o, i) => {
        let config = o;
        if (typeof o === 'string') {
            config = OUTPUTS.find(x => x.outputId === o);
        }
        const { viewerId, args } = config;
        const Comp = VIEWERS[viewerId].component;
        return (
            <>
                <LevelHeader title={VIEWERS[viewerId].name}>Edit your stuff here!</LevelHeader>
                <Comp key={viewerId} concept={conceptConfig} {...args} />
            </>
        );
    })}</div>;
};


const Stage = () => {

    const concept = useRecoilValue(conceptState);

    return (
        <div className="output-list">
            <Chart />
            <ConceptViewer conceptConfig={concept} />
        </div>
    );
};

export default Stage;
