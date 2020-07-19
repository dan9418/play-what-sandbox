import { atom, selector } from 'recoil';
import PW from 'play-what';
import { CHARTS, PROGRESSIONS, CONCEPTS } from '../Common/Presets';

// CONSTS

export const PRESETS = {
    concept: CONCEPTS,
    progression: PROGRESSIONS,
    chart: CHARTS
};

export const ZOOM = {
    concept: 'concept',
    progression: 'progression',
    chart: 'chart'
};

// DEFAULTS

const DEFAULT_POSITION = [0, 0, 0];
const DEFAULT_PRESET_INDEX = 0;

const DEFAULT_CONCEPT_CONFIG = { a: { p: 0, d: 0 }, B: [], C: [] };
const DEFAULT_PROGRESSION = { concepts: [DEFAULT_CONCEPT_CONFIG] };
const DEFAULT_SECTION = { progressions: [DEFAULT_PROGRESSION] };
const DEFAULT_CHART = { sections: [DEFAULT_SECTION] };

// UTILS

export const parseConceptConfig = (conceptConfig) => {
    let concept = { ...conceptConfig };
    if (typeof concept.a === 'string') {
        //concept.a = concept.a;
    }
    if (typeof concept.B === 'string') {
        concept.B = PW.Theory.findPresetWithId(concept.B).B;
    }
    if (concept.transforms) {
        concept.transforms.forEach(t => {
            switch (t.id) {
                case 'transpose':
                    concept = PW.Theory.transpose(concept, t.args.a);
                    break;
                case 'chordalInversion':
                    concept = PW.Theory.chordalInversion(concept, t.args.inversion)
                    break;
            }
        })
    }
    return concept;
};


// ATOMS

export const chartState = atom({
    key: 'chart',
    default: DEFAULT_CHART
});

export const positionState = atom({
    key: 'position',
    default: DEFAULT_POSITION
});

// SELECTORS

export const sectionState = selector({
    key: 'section',
    get: ({ get }) => {
        const chart = get(chartState);
        const position = get(positionState);
        const [s] = position;
        return chart.sections[s];
    }
});

export const progressionState = selector({
    key: 'progression',
    get: ({ get }) => {
        const chart = get(chartState);
        const position = get(positionState);
        const [s, p] = position;
        return chart.sections[s].progressions[p];
    }
});

export const conceptConfigState = selector({
    key: 'conceptConfig',
    get: ({ get }) => {
        const chart = get(chartState);
        const position = get(positionState);
        const [s, p, c] = position;
        return chart.sections[s].progressions[p].concepts[c];
    }
});

export const chartLevelsState = selector({
    // Raw config
    key: 'chartLevels', get: ({ get }) => {
        const chart = get(chartState);
        const section = get(sectionState);
        const progression = get(progressionState);
        const concept = get(conceptConfigState);
        return {
            chart: chart,
            section: section,
            progression: progression,
            concept: concept
        };
    }
});

export const conceptState = selector({
    key: 'concept',
    get: ({ get }) => {
        const levels = get(chartLevelsState);
        const { chart, section, progression, concept: conceptConfig } = levels;
        const defaults = { ...(chart.defaults || {}), ...(section.defaults || {}), ...(progression.defaults || {}) };
        const mergedConfig = { ...defaults, ...conceptConfig };
        const concept = parseConceptConfig(mergedConfig);
        concept.C = PW.Theory.addVectorsBatch(concept.a, concept.B);

        return concept;
    }
});

// Sub-Concepts

export const aState = selector({
    key: 'a',
    get: ({ get }) => {
        const concept = get(conceptState);
        return concept.a;
    },
    set: ({ get, set }, a) => {
        const concept = get(conceptState);
        set(conceptState, { ...concept, a })
    }
});

export const BState = selector({
    key: 'B',
    get: ({ get }) => {
        const concept = get(conceptState);
        return concept.B;
    },
    set: ({ get, set }, B) => {
        const concept = get(conceptState);
        set(conceptState, { ...concept, B })
    }
});

export const CState = selector({
    key: 'C',
    get: ({ get }) => {
        const concept = get(conceptState);
        return concept.C;
    },
    set: ({ get, set }, C) => {
        const concept = get(conceptState);
        set(conceptState, { ...concept, C })
    }
});

// Sequencing

export const nextPositionState = selector({
    key: 'nextPosition',
    get: ({ get }) => {
        const chart = get(chartState);
        const position = get(positionState);
        const [s, p, c] = position;

        const isLastSection = s === chart.sections.length - 1;
        const isLastProgression = p === chart.sections[s].progressions.length - 1;
        const isLastConcept = c === chart.sections[s].progressions[p].concepts.length - 1;

        if (isLastConcept) {
            if (isLastProgression) {
                if (isLastSection) {
                    return [0, 0, 0];
                }
                return [s + 1, 0, 0];
            }
            return [s, p + 1, 0];
        }
        return [s, p, c + 1];
    }
});

export const nextConceptState = selector({
    key: 'nextConcept',
    get: ({ get }) => {
        const chart = get(chartState);
        const nextPosition = get(nextPositionState);
        const [s, p, c] = nextPosition;
        return chart.sections[s].progressions[p].concepts[c];
    }
});
