import { atom, selector } from 'recoil';
import PW from 'play-what';
import { CHARTS, PROGRESSIONS, CONCEPTS } from '../Common/Presets';

export const PRESETS = {
    concept: CONCEPTS,
    progression: PROGRESSIONS,
    chart: CHARTS
};

export const ZOOM_LEVEL = {
    concept: 'concept',
    progression: 'progression',
    chart: 'chart'
};

const formatSourceForZoomLevel = (z, rawSource) => {
    const source = rawSource || PRESETS[z][0];
    switch (z) {
        case ZOOM_LEVEL.concept:
            return { sections: [{ progressions: [{ concepts: [source] }] }] };
        case ZOOM_LEVEL.progression:
            return { sections: [{ progressions: [source] }] };
        case ZOOM_LEVEL.chart:
            return source;
    }
}

const DEFAULT_POSITION = [0, 0, 0];
const Z = ZOOM_LEVEL.chart;

// CORE

const zoomLevelState = atom({
    key: 'zoomLevel',
    default: Z
});

const chartState = atom({
    key: 'source',
    default: formatSourceForZoomLevel(Z)
});

export const positionState = atom({
    key: 'position',
    default: DEFAULT_POSITION
});

// HELPERS

export const zoomLevelSelector = selector({
    key: 'zoomLevelSelector',
    get: ({ get }) => get(zoomLevelState),
    set: ({ set }, z) => {
        set(zoomLevelState, z);
        set(chartState, formatSourceForZoomLevel(z));
        set(positionState, DEFAULT_POSITION);
    }
});

export const sourceSelector = selector({
    key: 'sourceSelector',
    get: ({ get }) => get(chartState),
    set: ({ get, set }, rawSource) => {
        const zoomLevel = get(zoomLevelSelector);
        const source = formatSourceForZoomLevel(zoomLevel, rawSource);
        set(chartState, source);
    }
});

export const parseConceptConfig = (conceptConfig) => {
    const concept = { ...conceptConfig };
    if (typeof concept.a === 'string') {
        //concept.a = concept.a;
    }
    if (typeof concept.B === 'string') {
        concept.B = PW.Theory.findPresetWithId(concept.B).B;
    }
    if(concept.transforms) {
        concept.transforms.forEach(t => {
            if(t.id === 'transpose') {
                concept.a = PW.Theory.addVectors(concept.a, t.args.a);
            }
        })
    }
    return concept;
};

export const mergeConceptConfig = (levels) => {
    const { chart, section, progression, concept } = levels;
    return { ...(chart.defaults || {}), ...(section.defaults || {}), ...(progression.defaults || {}), ...concept };
}


export const sectionState = selector({
    key: 'section',
    get: ({ get }) => {
        const source = get(chartState);
        const position = get(positionState);
        const [s] = position;
        return source.sections[s];
    }
});

export const progressionState = selector({
    key: 'progression',
    get: ({ get }) => {
        const source = get(chartState);
        const position = get(positionState);
        const [s, p] = position;
        return source.sections[s].progressions[p];
    }
});

export const rawConceptState = selector({
    key: 'rawConcept',
    get: ({ get }) => {
        const source = get(chartState);
        const position = get(positionState);
        const [s, p, c] = position;
        return source.sections[s].progressions[p].concepts[c];
    },
    set: ({ set, get }, concept) => {
        const source = get(chartState);
        const position = get(positionState);
        const [s, p, c] = position;

        const sourceCopy = { ...source };
        sourceCopy.sections = [...source.sections];
        sourceCopy.sections[s] = { ...source.sections[s] };
        sourceCopy.sections[s].progressions = [...source.sections[s].progressions];
        sourceCopy.sections[s].progressions[p] = { ...source.sections[s].progressions[p] };
        sourceCopy.sections[s].progressions[p].concepts = [...source.sections[s].progressions[p].concepts];
        sourceCopy.sections[s].progressions[p].concepts[c] = { ...concept };

        set(chartState, sourceCopy);
    }
});

export const levelsState = selector({
    key: 'levels',
    get: ({ get }) => {
        const source = get(chartState);
        const position = get(positionState);
        const [s, p, c] = position;
        return {
            chart: source,
            section: source.sections[s],
            progression: source.sections[s].progressions[p],
            concept: source.sections[s].progressions[p].concepts[c]
        };
    }
});


export const conceptState = selector({
    key: 'concept',
    get: ({ get }) => {
        const levels = get(levelsState);
        const { chart, section, progression, concept } = levels;
        const mergedConcept = { ...(chart.defaults || {}), ...(section.defaults || {}), ...(progression.defaults || {}), ...concept };
        return parseConceptConfig(mergedConcept);
    }
});

export const nextPositionState = selector({
    key: 'nextPosition',
    get: ({ get }) => {
        const zoomLevel = get(zoomLevelSelector);
        const source = get(chartState);
        const position = get(positionState);
        switch (zoomLevel) {
            case 'concept':
                return DEFAULT_POSITION;
            case 'progression':
                const isLast = position[2] === source.sections[0].progressions[0].concepts.length - 1;
                return isLast ? DEFAULT_POSITION : [0, 0, position + 1];
            case 'chart':
                const [s, p, c] = position;
                const isLastSection = s === source.sections.length - 1;
                const isLastProgression = p === source.sections[s].progressions.length - 1;
                const isLastConcept = c === source.sections[s].progressions[p].concepts.length - 1;
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
    }
});

export const nextConceptState = selector({
    key: 'nextConcept',
    get: ({ get }) => {
        const source = get(chartState);
        const nextPosition = get(nextPositionState);
        const [s, p, c] = nextPosition;
        return source.sections[s].progressions[p].concepts[c];
    }
});


export const aState = selector({
    key: 'a',
    get: ({ get }) => {
        const concept = get(conceptState);
        return concept.a;
    },
    set: ({ get, set }, newConcept) => {
        const oldConcept = get(conceptState);
        set(conceptState, { ...newConcept, B: oldConcept.B })
    }
});

export const BState = selector({
    key: 'B',
    get: ({ get }) => {
        const concept = get(conceptState);
        return concept.B;
    },
    set: ({ get, set }, newConcept) => {
        const oldConcept = get(conceptState);
        set(conceptState, { ...newConcept, a: oldConcept.a })
    }
});
