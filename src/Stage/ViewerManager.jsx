import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { VIEWERS } from '../Common/Viewers';
import { scopedConceptsState, viewersState } from '../Common/State';
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

const ViewerGrid = ({ viewers, x, y }) => {
    const style = { };
    return (
        <div className="viewer-grid" style={style}>
            {viewers}
        </div>
    );
};

const ViewerManager = () => {
    const concepts = useRecoilValue(scopedConceptsState);
    const [viewers, setViewers] = useRecoilState(viewersState);
    const Viewer = VIEWERS[viewers[0].viewerId].component;

    const viewerComps = concepts.map((c, i) => <Viewer key={i} concept={c} />)

    return (
        <div className="viewer-manager">
            <ViewerGrid viewers={viewerComps} x={2} y={2} />
        </div>
    );
};

export default ViewerManager;
