import React, { useState } from 'react';
import './Chart.css';
import PW from 'play-what';
import PresetSelecor from '../../Menu/PresetSelector';
import { useRecoilState } from 'recoil';
import { zoomLevelSelector, sourceSelector, aState, BState, positionState, parseConceptConfig } from '../../Common/State';

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

    const [a, setA] = useRecoilState(aState);
    const [B, setB] = useRecoilState(BState);
    const [zoomLevel, setZoomLevel] = useRecoilState(zoomLevelSelector);
    const [source, setSource] = useRecoilState(sourceSelector);
    const [position, setPosition] = useRecoilState(positionState);

    return (
        <div className="chart">
            <label>Select Preset:</label>
            <PresetSelecor />
            {zoomLevel === 'chart' && <>
                <h2>Sections</h2>
                {source.sections.map((s, i) => <Section key={i} s={i} section={s} defaults={source.defaults} />)}
            </>}
            {zoomLevel === 'progression' && <>
                <h2>Concepts</h2>
                <Progression s={0} p={0} progression={source.sections[0].progressions[0]} defaults={source.sections[0].defaults} />
            </>}
            {zoomLevel === 'concept' && <div className='concept-input-2'>
                <div><Concept s={0} p={0} c={0} conceptConfig={source.sections[0].progressions[0].concepts[0]} defaults={source.sections[0].progressions[0].defaults} /></div>
                <h2>Key Center</h2>
                <KeyCenterInput keyCenter={a} setKeyCenter={setA} />
                <h2>Intervals</h2>
                <IntervalListInput intervals={B} setIntervals={setB} />
            </div>}
        </div>
    )
}