import React, { useState } from 'react';
import './Stage.css';
import PW from 'play-what';

import { useRecoilValue, useRecoilState } from 'recoil';
import { conceptState, viewersState } from '../Common/State';
import { VIEWERS } from '../Common/Presets';
import LevelHeader from './LevelHeader';

const Viewer = ({ viewerConfig, concept }) => {
    const { name, viewerId, args = {} } = viewerConfig;
    const viewer = VIEWERS[viewerId];
    const { component: Comp } = viewer;

    return (
        <div className='viewer'>
            <LevelHeader title={name}>Edit your stuff here!</LevelHeader>
            <Comp {...args} concept={concept} />
        </div>
    );
};


const Stage = () => {

    const concept = useRecoilValue(conceptState);
    const [viewers, setViewers] = useRecoilState(viewersState);

    return (
        <div className="output-list">
            {viewers.map((v, i) => <Viewer key={i} viewerConfig={v} concept={concept} />)}
        </div>
    );
};

export default Stage;
