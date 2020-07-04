import { atom, selector } from 'recoil';
import Viewers from 'play-what-react-viewers';
import { CHARTS, PROGRESSIONS, CONCEPTS } from '../Common/Presets';

const { UI, Modules } = Viewers;
const { ButtonInput } = UI;
const { Concept, Progression, Chart } = Modules;

export const INPUT_MODES = [
    {
        id: 'concept',
        name: 'Concept',
        label: '•',
        component: Concept,
        presets: CONCEPTS,
        startPosition: null
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••',
        component: Progression,
        presets: PROGRESSIONS,
        startPosition: 0
    },
    {
        id: 'chart',
        name: 'Chart',
        label: '••••',
        component: Chart,
        presets: CHARTS,
        startPosition: [0, 0, 0]
    }
];

export const inputModeState = atom({
    key: 'inputMode',
    default: INPUT_MODES[2]
});

export const sourceState = atom({
    key: 'source',
    default: INPUT_MODES[2].presets[0]
});

export const positionState = atom({
    key: 'position',
    default: INPUT_MODES[2].startPosition
});

export const inputModeSelector = selector({
    key: 'inputModeSelector',
    get: ({ get }) => get(inputModeState),
    set: ({ set }, inputMode) => {
        set(inputModeState, inputMode);
        set(sourceState, inputMode.presets[0]);
        set(positionState, inputMode.startPosition);
    }
});

export const conceptState = selector({
    key: 'concept',
    get: ({ get }) => {
        const inputMode = get(inputModeSelector);
        const source = get(sourceState);
        const position = get(positionState);
        switch (inputMode.id) {
            case 'concept':
                return source;
            case 'progression':
                return source.cols[position];
            case 'chart':
                const [s, r, c] = position;
                return source.sections[s].rows[r].cols[c];
        }
    },
    set: ({ set, get }, concept) => {
        const inputMode = get(inputModeSelector);
        const source = get(sourceState);
        const position = get(positionState);
        switch (inputMode.id) {
            case 'concept':
                set(sourceState, source);
                break;
            case 'progression':
                const progressionCopy = { ...source };
                progressionCopy.cols = [...source.cols]
                progressionCopy.cols[position] = concept;
                set(sourceState, progressionCopy);
                break;
            case 'chart':
                const [s, r, c] = position;
                const chartCopy = { ...source };
                chartCopy.sections[s].rows[r].cols = [...source.sections[s].rows[r].cols];
                chartCopy.sections[s].rows[r].cols[c] = concept;
                set(sourceState, chartCopy);
                break;
        }
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