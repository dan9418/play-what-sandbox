import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { VIEWERS } from '../Common/Viewers';
import { scopedConceptsState, viewersState, positionState } from '../Common/State';
import LevelHeader from './LevelHeader';
import './Stage.css';
import { ZOOM } from '../Common/Constants';

const Viewer = ({ ViewerComp, concept, s, p, c }) => {
    const position = useRecoilValue(positionState);
    const isActive = position[0] === s && position[1] === p && position[2] === c;
    return (
        <div className={`viewer ${isActive ? 'pw-accent pw-active' : ''}`}>
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
            cols = 1;
            break;
    }

    const [x, setX] = useState(cols);
    const style = { gridTemplateColumns: `repeat(${x}, 1fr)` };
    console.log(style)
    return (
        <div className="viewer-level" >
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
    const [viewers, setViewers] = useRecoilState(viewersState);
    const ViewerComp = VIEWERS[viewers[0].viewerId].component;

    return (
        <div className="viewer-manager">
            <ViewerLevel data={data} scope={scope} ViewerComp={ViewerComp} />
        </div>
    );
};

export default ViewerManager;
