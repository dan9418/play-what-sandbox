import PW from 'play-what';
import { atom, selector } from 'recoil';
import { VIEWERS, VIEWER_PROFILES } from '../Common/Viewers';
import { ZOOM, DEFAULTS } from './Constants';
import PRESETS from './Presets/Presets';

// UTILS

export const getSourceScope = source => {
    // TODO refactor
    if (!source.sections && !source.progressions && !source.concepts) {
        return ZOOM.Concept;
    }
    if (!source.sections && !source.progressions) {
        return ZOOM.Progression;
    }
    if (!source.sections) {
        return ZOOM.Section;
    }
    return ZOOM.Chart;
};

// CONSTS

const POSITION = [0, 0, 0];

const SCOPE_INDEX = 0;
const CATEGORY_INDEX = 1;
const PRESET_INDEX = 0;

// ATOMS

export const _sourceState = atom({
    key: '_source',
    default: PRESETS[SCOPE_INDEX].categories[CATEGORY_INDEX].presets[PRESET_INDEX]
});

export const positionState = atom({
    key: 'position',
    default: POSITION
});

export const scopeState = atom({
    key: 'scope',
    default: ZOOM.Concept
});

export const menuTabState = atom({
    key: 'menuTab',
    default: 'source'
});

export const _viewersState = atom({
    key: '_viewers',
    default: ['fretboard', 'keyboard']
});

// PARSERS

export const parseConceptHelper = (conceptConfig) => {
    let concept = { ...conceptConfig };
    if (typeof concept.a === 'string') {
        concept.a = PW.Theory.parseKeyString(concept.a);
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
    concept.C = PW.Theory.addVectorsBatch(concept.a, concept.B);
    return concept;
};

export const parseConceptConfig = (conceptConfig, c = 0, progressionConfig = {}, p = 0, sectionConfig = {}, s = 0, chartConfig = {}) => {
    const { id, name } = conceptConfig;

    const mergedDefaults = {
        ...DEFAULTS,
        ...(chartConfig.defaults || {}),
        ...(sectionConfig.defaults || {}),
        ...(progressionConfig.defaults || {})
    };

    const mergedConfig = { ...mergedDefaults, ...conceptConfig };

    const concept = parseConceptHelper(mergedConfig);

    return {
        id: id || `concept_${c + 1}`,
        name: name || PW.Chart.getConceptName(concept),
        a: concept.a,
        B: concept.B,
        C: concept.C,
        outputs: concept.outputs
    };
};

const parseProgressionConfig = (progressionConfig, p = 0, sectionConfig = {}, s = 0, chartConfig = {}) => {
    const { id, name, defaults, outputs, concepts } = progressionConfig;

    const parsedConcepts = concepts.map((con, c) => {
        return parseConceptConfig(con, c, progressionConfig, p, sectionConfig, s, chartConfig);
    });

    return {
        id: id || `progression_${p + 1}`,
        name: name || `Progression ${p + 1}`,
        defaults,
        outputs: outputs || [],
        concepts: parsedConcepts
    };
};

const parseSectionConfig = (sectionConfig, s = 0, chartConfig = {}) => {
    const { id, name, defaults, outputs, progressions } = sectionConfig;

    const parsedProgressions = progressions.map((prog, p) => {
        return parseProgressionConfig(prog, p, sectionConfig, s, chartConfig);
    });

    return {
        id: id || `section_${s + 1}`,
        name: name || `Section ${s + 1}`,
        defaults,
        outputs: outputs || [],
        progressions: parsedProgressions
    };
};

const parseChartConfig = chartConfig => {
    const { id, name, defaults, outputs, sections } = chartConfig;

    const parsedSections = sections.map((sec, s) => {
        return parseSectionConfig(sec, s, chartConfig);
    });

    return {
        id: id || 'chart',
        name: name || 'Chart',
        defaults,
        outputs: outputs || [],
        sections: parsedSections
    };
};

export const parseViewerConfig = viewerConfig => {
    if (typeof viewerConfig === 'string') {
        const config = { ...VIEWER_PROFILES[viewerConfig] };
        const viewer = VIEWERS[config.viewerId];
        config.args = { ...viewer.defaults, ...config.args };
        return config;
    }
    const config2 = { ...viewerConfig };
    config2.args = { ...VIEWERS[viewerConfig.viewerId].defaults, ...config2.args };
    return config2;
}

// SELECTORS

export const viewersState = selector({
    key: 'viewers',
    get: ({ get }) => {
        const viewers = get(_viewersState);
        return viewers.map(v => parseViewerConfig(v))
    },
    set: ({ get, set }, [index, config]) => {
        console.log(index, config)
        const viewers = get(_viewersState);
        const newVeiwers = [...viewers.slice(0, index), config, ...viewers.slice(index + 1)];
        console.log(newVeiwers)
        set(_viewersState, newVeiwers);

    }
});

export const sourceState = selector({
    key: 'source',
    get: ({ get }) => {
        const source = get(_sourceState);
        const sourceScope = getSourceScope(source);
        switch (sourceScope) {
            case ZOOM.Chart:
                return {
                    data: parseChartConfig(source),
                    scope: sourceScope
                };
            case ZOOM.Section:
                return {
                    data: parseSectionConfig(source),
                    scope: sourceScope
                };
            case ZOOM.Progression:
                return {
                    data: parseProgressionConfig(source),
                    scope: sourceScope
                };
            case ZOOM.Concept:
                return {
                    data: parseConceptConfig(source),
                    scope: sourceScope
                };
            default:
                throw ('Invalid source scope');
        }
    },
    set: ({ get, set }, source) => {
        set(_sourceState, source)
    }
});

export const conceptState = selector({
    key: 'concept',
    get: ({ get }) => {
        const position = get(positionState);
        const [s, p, c] = position;

        const { scope, data } = get(sourceState);
        let conceptConfig = undefined;
        let progressionConfig = undefined;
        let sectionConfig = undefined;
        let chartConfig = undefined;

        switch (scope) {
            case ZOOM.Chart:
                chartConfig = data;
                sectionConfig = chartConfig.sections[s];
                progressionConfig = sectionConfig.progressions[p];
                conceptConfig = progressionConfig.concepts[c];
                break;
            case ZOOM.Section:
                sectionConfig = data;
                progressionConfig = sectionConfig.progressions[p];
                conceptConfig = progressionConfig.concepts[c];
                break;
            case ZOOM.Progression:
                progressionConfig = data;
                conceptConfig = progressionConfig.concepts[c];
                break;
            case ZOOM.Concept:
                conceptConfig = data;
                break;
            default:
                throw ('Invalid source scope 2');
        }
        const concept = parseConceptConfig(conceptConfig, c, progressionConfig, p, sectionConfig, s, chartConfig);
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
        const chart = get(sourceState).data;
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
        const chart = get(sourceState).data;
        const nextPosition = get(nextPositionState);
        const [s, p, c] = nextPosition;
        return chart.sections[s].progressions[p].concepts[c];
    }
});

/*export const deepCopy = (source, zoom) => {
    const copy = { ...source };
    switch (zoom) {
        case ZOOM.Chart:
            copy.defaults = { ...(source.defaults || {}) };
            copy.sections = source.sections.map(s => deepCopy(s, ZOOM.Section))
            return copy;
        case ZOOM.Section:
            copy.defaults = { ...(source.defaults || {}) };
            copy.progressions = source.progressions.map(p => deepCopy(p, ZOOM.Progression));
            return copy;
        case ZOOM.Progression:
            copy.defaults = { ...(source.defaults || {}) };
            copy.concepts = source.concepts.map(c => deepCopy(c, ZOOM.Concept));
            return copy;
        case ZOOM.Concept:
            return copy;
    }
};*/