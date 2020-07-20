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

const MultiViewer = ({ children, zoom }) => {

    const [index, setIndex] = useState(0);
    const setNext = () => setIndex(index + 1);
    const setPrev = () => setIndex(index - 1);

    let title = null;
    switch (zoom) {
        case ZOOM.Chart:
            title = "Section";
            break;
        case ZOOM.Section:
            title = "Progression";
            break;
        case ZOOM.Progression:
            title = "Concept";
            break;
        case ZOOM.Concept:
            title = "Viewer";
            break;
    }

    return (
        <div className="multi-viewer">
            <div className='title'>
                {`${title}:  `}
                <ButtonInput onClick={setPrev}>{'<'}</ButtonInput>
                {`  ${index + 1}/${children.length}  `}
                <ButtonInput onClick={setNext}>{'>'}</ButtonInput>
            </div>
            {children[index]}
        </div>
    );
};

const getViewers = (source, scope, defaults = {}) => {
    switch (scope) {
        case ZOOM.Concept:
            const mergedSource = { ...defaults, ...source };
            if (!mergedSource.outputs) return null;

            const concept = parseConceptConfig(mergedSource);
            concept.C = PW.Theory.addVectorsBatch(concept.a, concept.B);

            return <MultiViewer zoom={ZOOM.Concept}>{mergedSource.outputs.map((o, i) => {
                let config = o;
                if (typeof o === 'string') {
                    config = OUTPUTS.find(x => x.outputId === o);
                }
                const { viewerId, args } = config;
                const Comp = VIEWERS[viewerId].component;
                return <Comp key={viewerId} concept={concept} {...args} />;
            })}</MultiViewer>;
        case ZOOM.Progression:
            return <MultiViewer zoom={ZOOM.Progression}>{Array.prototype.concat(...source.concepts.map((c, i) => {
                const viewersForConcept = getViewers(c, ZOOM.Concept, { ...defaults, ...source.defaults });
                return <div className="concept-viewers">{viewersForConcept}</div>
            }))}</MultiViewer>;
        case ZOOM.Section:
            return <MultiViewer zoom={ZOOM.Section}>{Array.prototype.concat(...source.progressions.map((p, i) => {
                return getViewers(p, ZOOM.Progression, { ...defaults, ...source.defaults })
            }))}</MultiViewer>;
        case ZOOM.Chart:
            return <MultiViewer zoom={ZOOM.Chart}>{Array.prototype.concat(...source.sections.map((s, i) => {
                return getViewers(s, ZOOM.Section, source.defaults)
            }))}</MultiViewer>;
    }
};

const Stage = () => {

    const activeScope = useRecoilValue(activeScopeState);

    return (
        <div className="output-list pw-light">
            <Chart zoom={activeScope.scope} />
            {getViewers(activeScope, activeScope.scope)}
        </div>
    );
};

export default Stage;
