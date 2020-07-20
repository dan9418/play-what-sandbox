import React, { useState } from 'react';
import './Stage.css';
import PW from 'play-what';

import Viewers from 'play-what-react-viewers';
const { Fretboard, Keyboard } = Viewers;

import { useRecoilValue } from 'recoil';
import { conceptState, activeScopeState, ZOOM, sourceState, parseConceptConfig } from '../Common/State';
import ConceptPreview from './ConceptPreview';
import { OUTPUTS } from '../Common/Presets';
import { Chart } from './Chart/Chart';
import ButtonInput from '../UI/ButtonInput/ButtonInput';

const VIEWERS = {
    fretboard: {
        id: 'fretboard',
        name: 'Fretboard',
        component: Fretboard.Viewer
    },
    keyboard: {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard.Viewer
    }
};

const ConceptViewer = ({ conceptConfig, defaults }) => {
    const mergedSource = { ...defaults, ...conceptConfig };
    if (!mergedSource.outputs) return null;

    const concept = parseConceptConfig(mergedSource);
    concept.C = PW.Theory.addVectorsBatch(concept.a, concept.B);

    return <div>{mergedSource.outputs.map((o, i) => {
        let config = o;
        if (typeof o === 'string') {
            config = OUTPUTS.find(x => x.outputId === o);
        }
        const { viewerId, args } = config;
        const Comp = VIEWERS[viewerId].component;
        return <Comp key={viewerId} concept={concept} {...args} />;
    })}</div>;
};

const ProgressionViewer = ({ progression, defaults: sectionDefaults }) => {

    const [index, setIndex] = useState(0);
    const setNext = () => setIndex(index + 1);
    const setPrev = () => setIndex(index - 1);

    const defaults = { ...sectionDefaults, ...(progression.defaults || {}) };

    return (
        <div className="multi-viewer">
            <h3>Progression</h3>
            <div className='title'>
                {`Concept  `}
                <ButtonInput onClick={setPrev}>{'<'}</ButtonInput>
                {`  ${index + 1}/${progression.concepts.length}  `}
                <ButtonInput onClick={setNext}>{'>'}</ButtonInput>
            </div>
            <ConceptViewer conceptConfig={progression.concepts[index]} defaults={defaults} />
        </div>
    );
};

const SectionViewer = ({ section, defaults: chartDefaults }) => {

    const defaults = { ...chartDefaults, ...(section.defaults || {}) };

    return (
        <div className="multi-viewer">
            <h2>Section</h2>
            {section.progressions.map((p, i) => {
                return <ProgressionViewer progression={p} defaults={defaults} />
            })}
        </div>
    );
};

const ChartViewer = ({ chart }) => {
    return (
        <div className="multi-viewer">
            <h1>Chart</h1>
            {chart.sections.map((s, i) => {
                return <SectionViewer section={s} defaults={chart.defaults || {}} />
            })}
        </div>
    );
};

/*const getViewers = (source, scope, defaults = {}) => {
    switch (scope) {

        case ZOOM.Progression:
            return <ProgressionViewer>{Array.prototype.concat(...source.concepts.map((c, i) => {
                const viewersForConcept = getViewers(c, ZOOM.Concept, { ...defaults, ...source.defaults });
                return <div className="concept-viewers">{viewersForConcept}</div>
            }))}</ProgressionViewer>;
        case ZOOM.Section:
            return <SectionViewer>{Array.prototype.concat(...source.progressions.map((p, i) => {
                return getViewers(p, ZOOM.Progression, { ...defaults, ...source.defaults })
            }))}</SectionViewer>;
        case ZOOM.Chart:
            return <SectionViewer>{Array.prototype.concat(...source.sections.map((s, i) => {
                return getViewers(s, ZOOM.Section, source.defaults)
            }))}</SectionViewer>;
    }
};*/

const Stage = () => {

    const activeScope = useRecoilValue(activeScopeState);

    return (
        <div className="output-list pw-light">
            <Chart zoom={activeScope.scope} />
            {activeScope.scope === ZOOM.Chart && <ChartViewer chart={activeScope} />}
            {activeScope.scope === ZOOM.Section && <SectionViewer section={activeScope} defaults={activeScope.defaults} />}
            {activeScope.scope === ZOOM.Progression && <ProgressionViewer progression={activeScope} defaults={activeScope.defaults} />}
            {activeScope.scope === ZOOM.Concept && <ConceptViewer conceptConfig={activeScope} defaults={activeScope.defaults} />}
        </div>
    );
};

export default Stage;
