import React, { useState } from 'react';
import './Chart.css';
import PW from 'play-what';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chartState, positionState, parseConceptConfig, ZOOM, sectionState, progressionState, conceptState, scopeState } from '../../Common/State';
import LevelHeader from '../LevelHeader';
import { useSetRecoilState } from 'recoil';

const Concept = props => {
    const { conceptConfig, s, p, c, defaults: progDefaults } = props;

    const mergedConcept = { ...(progDefaults || {}), ...(conceptConfig || {}) }

    const concept = parseConceptConfig(mergedConcept);

    const [position, setPosition] = useRecoilState(positionState)

    const tonic = PW.Theory.getNoteName(concept.a);
    const preset = PW.Theory.findPreset(concept.B);

    const style = { flexGrow: concept.t };

    const isActive = position[0] === s && position[1] === p && position[2] === c;

    return (
        <div className={`concept pw-hov ${isActive ? 'pw-accent' : 'pw-concept'}`} style={style} onClick={() => setPosition([s, p, c])}>
            <div>
                <span className="tonic">{tonic}</span>
                <span className="preset">{preset.id}</span>
            </div>
        </div>
    );
};

const Progression = props => {
    const { progression, s, p, defaults: secDefaults } = props;
    const defaults = { ...(secDefaults || {}), ...(progression.defaults || {}) }
    const title = progression.name || `Progression ${p + 1}`;
    const setScope = useSetRecoilState(scopeState);

    return (
        <div className={`progression pw-progression pw-hov`} onClick={() => setScope(ZOOM.Progression)}>
            <h4 className='progression-name'>{title}</h4>
            <div className={`progression-concepts`}>
                {progression.concepts.map((c, i) => <Concept key={i} s={s} p={p} c={i} conceptConfig={c} defaults={defaults} />)}
            </div>
        </div>
    );
};

const Section = props => {
    const { section, s, defaults: chartDefaults } = props;
    const defaults = { ...(chartDefaults || {}), ...(section.defaults || {}) };
    const title = section.name || `Section ${s + 1}`;
    const setScope = useSetRecoilState(scopeState);
    return (
        <div className={`section pw-section pw-hov`}>
            <h3 className='section-name' onClick={() => setScope(ZOOM.Section)}>{title}</h3>
            <div>
                {open && section.progressions.map((p, i) =>
                    <Progression key={i} s={s} p={i} progression={p} defaults={defaults} />
                )}
            </div>
        </div>
    );
};

// Levels

const ChartLevel = props => {
    const chart = useRecoilValue(chartState);
    return (
        <div className="chart">
            {chart.sections.map((s, i) => <Section key={i} s={i} section={s} defaults={chart.defaults} />)}
        </div>
    )
};

const SectionLevel = props => {
    const section = useRecoilValue(sectionState);
    return <Section s={0} section={section} defaults={section.defaults} />;
};

const ProgressionLevel = props => {
    const progression = useRecoilValue(progressionState);
    return <Progression s={0} p={0} progression={progression} defaults={progression.defaults} />;
};

const ConceptLevel = props => {
    const concept = useRecoilValue(conceptState);
    return <Concept s={0} p={0} c={0} conceptConfig={concept} defaults={null} />;
};

// Delegater

const getData = scope => {
    switch (scope) {
        case ZOOM.Chart:
            return {
                breadcrumbs: ['Chart'],
                level: <ChartLevel />,
                panel: 'Edit your stuff here!'
            };
        case ZOOM.Section:
            return {
                breadcrumbs: ['Chart', 'Section'],
                level: <SectionLevel />,
                panel: 'Edit your stuff here!'
            };
        case ZOOM.Progression:
            return {
                breadcrumbs: ['Chart', 'Section', 'Progression'],
                level: <ProgressionLevel />,
                panel: 'Edit your stuff here!'
            };
        case ZOOM.Concept:
            return {
                breadcrumbs: ['Chart', 'Section', 'Progression', 'Concept'],
                level: <ConceptLevel />,
                panel: 'Edit your stuff here!'
            };
    }
}

const ChartDelegater = () => {
    const [scope, setScope] = useRecoilState(scopeState);
    const data = getData(scope);
    return (
        <div className="chart-delegater">
            <h1>{data.breadcrumbs.join(' > ')}</h1>
            {/*<LevelHeader title={data.breadcrumbs.join(' > ')} >{data.panel}</LevelHeader>*/}
            {data.level}
        </div>
    );
};

export default ChartDelegater;