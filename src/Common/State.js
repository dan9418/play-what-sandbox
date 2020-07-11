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

const sourceState = atom({
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
        set(sourceState, formatSourceForZoomLevel(z));
        set(positionState, DEFAULT_POSITION);
    }
});

export const sourceSelector = selector({
    key: 'sourceSelector',
    get: ({ get }) => get(sourceState),
    set: ({ get, set }, rawSource) => {
        const zoomLevel = get(zoomLevelSelector);
        const source = formatSourceForZoomLevel(zoomLevel, rawSource);
        set(sourceState, source);
    }
});

const parseConceptConfig = c => {
    const concept = { ...c };
    if (typeof concept.a === 'string') {

    }
    if (typeof concept.B === 'string') {
        concept.B = PW.Theory.findPresetWithId(concept.B).B;
    }
    return concept;
}

export const conceptState = selector({
    key: 'concept',
    get: ({ get }) => {
        const source = get(sourceState);
        const position = get(positionState);
        const [s, p, c] = position;
        const conceptConfig = source.sections[s].progressions[p].concepts[c];
        return parseConceptConfig(conceptConfig);
    },
    set: ({ set, get }, concept) => {
        const source = get(sourceState);
        const position = get(positionState);
        const [s, p, c] = position;

        const sourceCopy = { ...source };
        sourceCopy.sections[s].progressions[p].concepts = [...source.sections[s].progressions[p].concepts];
        sourceCopy.sections[s].progressions[p].concepts[c] = concept;

        set(sourceState, sourceCopy);
    }
});

export const nextPositionState = selector({
    key: 'nextPosition',
    get: ({ get }) => {
        const zoomLevel = get(zoomLevelSelector);
        const source = get(sourceState);
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
        const source = get(sourceState);
        const nextPosition = get(nextPositionState);
        const [s, p, c] = nextPosition;
        return source.sections[s].progressions[p].concepts[c];
    }
});

/*
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
*/