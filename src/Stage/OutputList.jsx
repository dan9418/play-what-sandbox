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

const getViewers = (source, scope, defaults = {}) => {
    switch (scope) {
        case ZOOM.Concept:
            const mergedSource = { ...defaults, ...source };
            if (!mergedSource.outputs) return null;

            const concept = parseConceptConfig(mergedSource);
            concept.C = PW.Theory.addVectorsBatch(concept.a, concept.B);

            return mergedSource.outputs.map((o, i) => {
                let config = o;
                if (typeof o === 'string') {
                    config = OUTPUTS.find(x => x.outputId === o);
                }
                const { viewerId, args } = config;
                const Comp = VIEWERS[viewerId].component;
                return <Comp key={viewerId} concept={concept} {...args} />;
            });
        case ZOOM.Progression:
            const out = Array.prototype.concat(...source.concepts.map((c, i) => {
                return getViewers(c, ZOOM.Concept, { ...defaults, ...source.defaults })
            }));
            return out;
        case ZOOM.Section:
            const out2 = Array.prototype.concat(...source.progressions.map((p, i) => {
                return getViewers(p, ZOOM.Progression, { ...defaults, ...source.defaults })
            }));
            return out2;
        case ZOOM.Chart:
            const out3 = Array.prototype.concat(...source.sections.map((s, i) => {
                return getViewers(s, ZOOM.Section, source.defaults)
            }));
            return out3;
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
