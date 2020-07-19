import React, { useState } from 'react';
import './Chart.css';
import PW from 'play-what';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chartState, positionState, parseConceptConfig } from '../../Common/State';

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
        <div className={`concept pw-hov ${isActive ? 'pw-accent' : 'pw-secondary'}`} style={style} onClick={() => setPosition([s, p, c])}>
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

    return (
        <div className={`progression pw-light`}>
            <h4 className='progression-name'>{progression.name || `${p + 1}`}</h4>
            <div className={`progression-concepts`}>
                {progression.concepts.map((c, i) => <Concept key={i} s={s} p={p} c={i} conceptConfig={c} defaults={defaults} />)}
            </div>
        </div>
    );
};

const Section = props => {
    const { section, s, defaults: chartDefaults } = props;
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const defaults = { ...(chartDefaults || {}), ...(section.defaults || {}) }
    return (
        <div className={`section`}>
            <h3 className='section-name' onClick={toggleOpen}>{section.name}</h3>
            <div>
                {open && section.progressions.map((p, i) =>
                    <Progression key={i} s={s} p={i} progression={p} defaults={defaults} />
                )}
            </div>
        </div>
    );
};

export const Chart = props => {

    const chart = useRecoilValue(chartState);

    return (
        <div className="chart">
            <h2>Sections</h2>
            {chart.sections.map((s, i) => <Section key={i} s={i} section={s} defaults={chart.defaults} />)}
        </div>
    )
}