import React, { useState } from 'react';
import './Chart.css';
import PW from 'play-what';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chartState, positionState, parseConceptConfig, ZOOM, sectionState, progressionState, conceptState, scopeState } from '../../Common/State';

const Concept = props => {
    const { conceptConfig, s, p, c, defaults: progDefaults } = props;

    const [scope, setScope] = useRecoilState(scopeState);
    const active = scope === ZOOM.Concept;

    const concept = parseConceptConfig({}, {}, s, {}, p, conceptConfig, c);

    const [position, setPosition] = useRecoilState(positionState)

    const style = { flexGrow: concept.t };

    const isActive = position[0] === s && position[1] === p && position[2] === c;

    return (
        <div className={`concept pw-hov ${isActive ? 'pw-accent' : 'pw-concept'} ${active ? 'pw-active' : ''}`} style={style} onClick={() => setPosition([s, p, c])}>
            <div className="concept-name">{concept.name}</div>
            <div className="concept-zoom pw-concept" onClick={() => setPosition([s, p, c])}>Zoom</div>
        </div>
    );
};

const Progression = props => {
    const { progression, s, p, defaults: secDefaults, shell, children } = props;
    const defaults = { ...(secDefaults || {}), ...(progression.defaults || {}) }
    const title = progression.name || `Progression ${p + 1}`;
    const [scope, setScope] = useRecoilState(scopeState);
    const active = scope === ZOOM.Progression;

    return (
        <div className={`progression pw-progression pw-hov ${shell ? 'pw-disabled' : ''} ${active ? 'pw-active' : ''}`}>
            <h4 className='progression-name' onClick={() => setScope(ZOOM.Progression)}>{title}</h4>
            {shell ? children :
                <div className={`progression-concepts`}>
                    {progression.concepts.map((c, i) => <Concept key={i} s={s} p={p} c={i} conceptConfig={c} defaults={defaults} />)}
                </div>
            }
        </div>
    );
};

const Section = props => {
    const { section, s, defaults: chartDefaults, shell, children } = props;
    const defaults = { ...(chartDefaults || {}), ...(section.defaults || {}) };
    const title = section.name || `Section ${s + 1}`;
    const [scope, setScope] = useRecoilState(scopeState);
    const active = scope === ZOOM.Section;

    return (
        <div className={`section pw-section pw-hov ${shell ? 'pw-disabled' : ''} ${active ? 'pw-active' : ''}`}>
            <h3 className='section-name' onClick={() => setScope(ZOOM.Section)}>{title}</h3>
            <div>
                {shell ? children : section.progressions.map((p, i) =>
                    <Progression key={i} s={s} p={i} progression={p} defaults={defaults} />
                )}
            </div>
        </div>
    );
};

const Chart = props => {
    const { chart, shell, children } = props;
    const title = chart.name || `Chart`;
    const [scope, setScope] = useRecoilState(scopeState);
    const active = scope === ZOOM.Chart;

    return (
        <div className={`chart pw-chart pw-hov ${shell ? 'pw-disabled' : ''} ${active ? 'pw-active' : ''}`}>
            <h2 className='chart-name' onClick={() => setScope(ZOOM.Chart)}>{title}</h2>
            {shell ? children : chart.sections.map((s, i) => <Section key={i} s={i} section={s} defaults={chart.defaults} />)}
        </div>
    );
};

// Levels

const ChartLevel = props => {
    const chart = useRecoilValue(chartState);
    return <Chart chart={chart} />;
};

const SectionLevel = props => {
    const section = useRecoilValue(sectionState);
    return (
        <Chart chart={{}} shell>
            <Section s={0} section={section} />
        </Chart>
    );
};

const ProgressionLevel = props => {
    const progression = useRecoilValue(progressionState);
    return (
        <Chart chart={{}} shell>
            <Section s={0} section={{}} shell>
                <Progression s={0} p={0} progression={progression} />
            </Section>
        </Chart>
    );
};

const ConceptLevel = props => {
    const concept = useRecoilValue(conceptState);
    return (
        <Chart chart={{}} shell>
            <Section s={0} section={{}} shell>
                <Progression s={0} p={0} progression={{}} shell>
                    <Concept s={0} p={0} c={0} conceptConfig={concept} />
                </Progression>
            </Section>
        </Chart>
    );
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
            <h1 className="breadcrumbs">{data.breadcrumbs.join(' > ')}</h1>
            {/*<LevelHeader title={data.breadcrumbs.join(' > ')} >{data.panel}</LevelHeader>*/}
            {data.level}
        </div>
    );
};

export default ChartDelegater;