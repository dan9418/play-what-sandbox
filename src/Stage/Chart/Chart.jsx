import React, { useState } from 'react';
import './Chart.css';
import PW from 'play-what';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chartState, positionState, parseConceptConfig, ZOOM, sectionState, progressionState, conceptState } from '../../Common/State';
import ZoomInput from '../../UI/ZoomInput/ZoomInput';

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

const ChartLevel = props => {

    const chart = useRecoilValue(chartState);

    return (
        <div className="level">
            <h2>Sections</h2>
            {chart.sections.map((s, i) => <Section key={i} s={i} section={s} defaults={chart.defaults} />)}
        </div>
    )
};

const SectionLevel = props => {
    const section = useRecoilValue(sectionState);
    return (
        <div className="level">
            <h2>Progressions</h2>
            {section.progressions.map((p, i) => <Progression key={i} s={0} p={i} progression={p} defaults={section.defaults} />)}
        </div>
    )
};

const ProgressionLevel = props => {
    const progression = useRecoilValue(progressionState);
    return (
        <div className="level">
            <h2>Concepts</h2>
            {progression.concepts.map((c, i) => <Concept key={i} s={0} p={0} c={i} conceptConfig={c} defaults={progression.defaults} />)}
        </div>
    )
};

const ConceptLevel = props => {
    const concept = useRecoilValue(conceptState);
    return (
        <div className="level">
            <h2>Concept</h2>
            <Concept s={0} p={0} c={0} conceptConfig={concept} defaults={null} />
        </div>
    )
};

export const Chart = props => {
    const [zoom, setZoom] = useState(ZOOM.Chart);
    return (
        <div className="chart">
            <ZoomInput zoom={zoom} setZoom={setZoom} />
            {zoom === ZOOM.Chart && <ChartLevel />}
            {zoom === ZOOM.Section && <SectionLevel />}
            {zoom === ZOOM.Progression && <ProgressionLevel />}
            {zoom === ZOOM.Concept && <ConceptLevel />}
        </div>
    )
}