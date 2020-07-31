import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { VIEWERS } from '../Common/Viewers';
import { conceptState, viewersState } from '../Common/State';
import LevelHeader from './LevelHeader';
import './Stage.css';

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

const ViewerManager = () => {

    const concept = useRecoilValue(conceptState);
    const [viewers, setViewers] = useRecoilState(viewersState);

    return (
        <div className="viewer-manager">
            {viewers.map((v, i) => <Viewer key={i} viewerConfig={v} concept={concept} />)}
        </div>
    );
};

export default ViewerManager;
