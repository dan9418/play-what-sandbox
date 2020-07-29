import React, { useState } from 'react';
import './Stage.css';
import PW from 'play-what';

import { useRecoilValue, useRecoilState } from 'recoil';
import { conceptState } from '../Common/State';
import { VIEWERS } from '../Common/Presets';
import LevelHeader from './LevelHeader';

const Output = ({ output, concept }) => {
    const viewerId = output;
    const viewer = VIEWERS[viewerId];
    const { name, component: Comp } = viewer;

    return (
        <div className='output'>
            <LevelHeader title={name}>Edit your stuff here!</LevelHeader>
            <Comp concept={concept} />
        </div>
    );
};


const Stage = () => {

    const concept = useRecoilValue(conceptState);
    const outputs = ['fretboard', 'keyboard'];

    return (
        <div className="output-list">
            {outputs.map((o, i) => <Output output={o} concept={concept} />)}
        </div>
    );
};

export default Stage;
