import React, { useState } from 'react';
import './Stage.css';
import PW from 'play-what';

import { useRecoilValue, useRecoilState } from 'recoil';
import { conceptState, viewersState, parseViewerConfig } from '../Common/State';
import { VIEWERS } from '../Common/Presets';
import LevelHeader from './LevelHeader';

const Viewer = ({ viewerConfig, concept }) => {
    const parsedConfig = parseViewerConfig(viewerConfig);
    const { name, viewerId, args = {} } = parsedConfig;
    const viewer = VIEWERS[viewerId];
    const { component: Comp } = viewer;

    return (
        <div className='viewer'>
            <LevelHeader title={name}>Edit your stuff here!</LevelHeader>
            <Comp concept={concept} {...args} />
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
