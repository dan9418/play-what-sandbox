import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { VIEWERS } from '../Common/Viewers';
import { scopedConceptsState, viewersState, positionState, conceptState, scopeState } from '../Common/State';
import LevelHeader from './LevelHeader';
import './Stage.css';
import { ZOOM } from '../Common/Constants';
import { useSetRecoilState } from 'recoil';

const Viewer = ({ ViewerComp, concept, s, p, c }) => {
    const [position, setPosition] = useRecoilState(positionState);
    return (
        <div className={`viewer`}>
            <ViewerComp concept={concept} />
        </div>
    );
};

const ViewerLevel = ({ scope, data, ViewerComp, s, p, c }) => {
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

    const [x, setX] = useState(cols);
    const style = cols ? { gridTemplateColumns: `repeat(${cols}, 1fr)` } : {};

    const [position, setPosition] = useRecoilState(positionState);
    const setScope = useSetRecoilState(scopeState);
    const isActive = position[0] === s && position[1] === p && position[2] === c;

    return (
        <div className={`viewer-level pw-${scope} ${isActive ? 'pw-active' : ''}`} onClick={() => setScope(scope)} >
            <label>{scope}</label>
            <div className="viewer-grid" style={style}>
                {scope === ZOOM.Concept &&
                    <Viewer ViewerComp={ViewerComp} concept={data} s={s || 0} p={p || 0} c={c || 0} />}
                {scope === ZOOM.Progression &&
                    data.concepts.map((con, i) => <ViewerLevel data={con} scope={ZOOM.Concept} ViewerComp={ViewerComp} s={s || 0} p={p || 0} c={i} />)}
                {scope === ZOOM.Section &&
                    data.progressions.map((prog, i) => <ViewerLevel data={prog} scope={ZOOM.Progression} ViewerComp={ViewerComp} s={s || 0} p={i} />)}
                {scope === ZOOM.Chart &&
                    data.sections.map((chart, i) => <ViewerLevel data={chart} scope={ZOOM.Section} ViewerComp={ViewerComp} s={i} />)}
            </div>
        </div>
    );
};

const ViewerManager = () => {
    const { data, scope } = useRecoilValue(scopedConceptsState);
    const concept = useRecoilValue(conceptState);
    const [viewers, setViewers] = useRecoilState(viewersState);
    const ViewerComp = VIEWERS[viewers[0].viewerId].component;

    return (
        <div className="viewer-manager">
            <div className="viewer-manager">
                {/*<ViewerComp concept={concept} />*/}
                <ViewerLevel data={data} scope={scope} ViewerComp={ViewerComp} />
            </div>
        </div>
    );
};

export default ViewerManager;