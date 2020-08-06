import PW from 'play-what';
import { atom, selector } from 'recoil';
import { VIEWER, VIEWER_PRESETS, parseViewerConfig } from '../Common/Viewers';
import { ZOOM, DEFAULTS } from './Constants';
import PRESETS from './Presets/Presets';

// COLLECTIONS

const SOURCE_COLLECTION = [
    {
        id: 'test_source',
        name: 'Test Source',
        input: [
            {
                value: 'pw/keyCenter/presets/C',
                props: {}
            },
            {
                value: 'pw/keyCenter/addIntervals',
                props: {
                    B: 'pw/concept/presets/Maj'
                }
            }
        ],
        children:
            [
                {
                    name: 'Section A',
                    children: [
                        {
                            name: 'Progression 1',
                            children: [
                                {
                                    // test
                                },
                            ]
                        },
                    ]
                },
            ]
    }
];

const VIEWER_COLLECTION = [
    {
        id: 'test_viewer',
        name: 'Test Viewer',
        scope: 'concept',
        sourceId: 'test_source',
        viewerId: 'fretboard',
        args: {}
    },
    {
        id: 'test_viewer',
        name: 'Test Viewer 2',
        scope: 'chart',
        sourceId: 'test_source',
        viewerId: 'keyboard',
        args: {}
    }
];

// ATOMS

export const _sources = atom({
    key: '_sources',
    default: SOURCE_COLLECTION
});

export const _positions = atom({
    key: '_positions',
    default: SOURCE_COLLECTION.map(() => [0, 0, 0])
});

export const _viewers = atom({
    key: '_viewers',
    default: VIEWER_COLLECTION
});

export const menuTabState = atom({
    key: 'menuTab',
    default: 'source'
});

// SELECTORS

export const viewersState = selector({
    key: 'viewers',
    get: ({ get }) => {
        const viewers = get(_viewers);
        return viewers.map(v => parseViewerConfig(v))
    },
    set: ({ get, set }, [index, config]) => {
        /*console.log(index, config)
        const viewers = get(viewerCollectionState);
        const newVeiwers = [...viewers.slice(0, index), config, ...viewers.slice(index + 1)];
        console.log(newVeiwers)
        set(viewerCollectionState, newVeiwers);
        */
    }
});

export const sourcesState = selector({
    key: 'sources',
    get: ({ get }) => {
        const sources = get(_sources);
        return sources.map(s => PW.api('pw/source/parse', { config: s }))
    },
    set: ({ get, set }, source) => {
        set(_sourceState, source)
    }
});

export const positionsState = selector({
    key: 'positions',
    get: ({ get }) => {
        const positions = get(_positions);
        return positions;
    },
    set: ({ get, set }, source) => {
        //set(_sourceState, source)
    }
});


/*

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

*/