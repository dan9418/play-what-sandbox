import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { VIEWER } from '../Common/Viewers';
import { viewersState, sourcesState, positionsState } from '../Common/State';
import './Stage.css';
import LevelHeader from './LevelHeader';
import { ZOOM } from '../Common/Constants';
import { useSetRecoilState } from 'recoil';

const Viewer = ({ ViewerComp, props, concept, s, p, c }) => {
    return (
        <div className={`viewer`}>
            <ViewerComp {...props} concept={concept} />
        </div>
    );
};

const ViewerLevel = ({ scope, source, ViewerComp, position, props, s, p, c }) => {
    let cols = 0;
    switch (scope) {
        case ZOOM.Chart:
            cols = 1;
            break;
        case ZOOM.Section:
            cols = 1;
            break;
        case ZOOM.Progression:
            cols = 4;
            break;
        case ZOOM.Concept:
            cols = null;
            break;
    }

    const style = cols ? { gridTemplateColumns: `repeat(${cols}, 1fr)` } : {};

    const isActive = position[0] === s && position[1] === p && position[2] === c;

    return (
        <div className={`viewer-level pw-${scope} ${isActive ? 'pw-active' : ''}`} onClick={() => setScope(scope)} >
            <label>{scope}</label>
            <div className="viewer-grid" style={style}>
                {scope === ZOOM.Concept &&
                    <Viewer ViewerComp={ViewerComp} props={props} concept={source} s={s || 0} p={p || 0} c={c || 0} />}
                {scope === ZOOM.Progression &&
                    source.children.map((con, i) =>
                        <ViewerLevel source={con} scope={ZOOM.Concept} ViewerComp={ViewerComp} position={position} props={props} s={s || 0} p={p || 0} c={i} />)}
                {scope === ZOOM.Section &&
                    source.children.map((prog, i) =>
                        <ViewerLevel source={prog} scope={ZOOM.Progression} ViewerComp={ViewerComp} position={position} props={props} s={s || 0} p={i} />)}
                {scope === ZOOM.Chart &&
                    source.children.map((chart, i) =>
                        <ViewerLevel source={chart} scope={ZOOM.Section} ViewerComp={ViewerComp} position={position} props={props} s={i} />)}
            </div>
        </div>
    );
};

const getSourceAtScope = (source, scope, position) => {
    const [s, p, c] = position;
    switch (scope) {
        case ZOOM.Chart:
            return source;
        case ZOOM.Section:
            return source.children[s];
        case ZOOM.Progression:
            return source.children[s].children[p];
        case ZOOM.Concept:
            return source.children[s].children[p].children[c];
        default:
            throw ('error', source, scope, position);
    }
}

const ViewerManager = () => {
    const [viewers, setViewers] = useRecoilState(viewersState);
    const [sources, setSources] = useRecoilState(sourcesState);
    const [positions, setPositions] = useRecoilState(positionsState);

    console.log(viewers, sources);

    const viewerComps = viewers.map((v, i) => {
        const { viewerId, sourceId, scope, args, name } = v;

        const viewerDef = VIEWER[viewerId];
        const ViewerComp = viewerDef.component;
        const props = args || {};

        const sourceIndex = sources.findIndex(s => s.id === sourceId);
        const fullSource = sources[sourceIndex];
        const position = positions[sourceIndex];

        const source = getSourceAtScope(fullSource, scope, position);
        console.log('scoped source', source);

        return <>
            <LevelHeader title={name} />
            <ViewerLevel source={source} scope={scope} ViewerComp={ViewerComp} position={position} props={props} />
        </>;
    });



    return (
        <div className="viewer-manager">
            <div className="viewer-manager">
                {viewerComps}
            </div>
        </div>
    );
};

export default ViewerManager;
