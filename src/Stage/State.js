import { atom, selector } from 'recoil';
import PW from 'play-what';
import Viewers from 'play-what-react-viewers';
import { CHARTS, PROGRESSIONS, CONCEPTS } from '../Common/Presets';

const { UI, Modules } = Viewers;
const { ButtonInput } = UI;

export const INPUT_MODES = [
    {
        id: 'concept',
        name: 'Concept',
        label: '•',
        presets: CONCEPTS,
        startPosition: null
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••',
        presets: PROGRESSIONS,
        startPosition: 0
    },
    {
        id: 'chart',
        name: 'Chart',
        label: '••••',
        presets: CHARTS,
        startPosition: [0, 0, 0]
    }
];

const I_M = 2;

export const inputModeState = atom({
    key: 'inputMode',
    default: INPUT_MODES[I_M]
});

export const sourceState = atom({
    key: 'source',
    default: INPUT_MODES[I_M].presets[0]
});

export const positionState = atom({
    key: 'position',
    default: INPUT_MODES[I_M].startPosition
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

const parseConceptPresets = c => {
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
        const inputMode = get(inputModeSelector);
        const source = get(sourceState);
        const position = get(positionState);
        switch (inputMode.id) {
            case 'concept':
                return parseConceptPresets(source);
            case 'progression':
                return parseConceptPresets(source.progression[position]);
            case 'chart':
                const [s, r, c] = position;
                return parseConceptPresets(source.sections[s].rows[r].progression[c]);
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
                progressionCopy.progression = [...source.progression]
                progressionCopy.progression[position] = concept;
                set(sourceState, progressionCopy);
                break;
            case 'chart':
                const [s, r, c] = position;
                const chartCopy = { ...source };
                chartCopy.sections[s].rows[r].progression = [...source.sections[s].rows[r].progression];
                chartCopy.sections[s].rows[r].progression[c] = concept;
                set(sourceState, chartCopy);
                break;
        }
    }
});

export const nextPositionState = selector({
    key: 'nextPosition',
    get: ({ get }) => {
        const inputMode = get(inputModeSelector);
        const source = get(sourceState);
        const position = get(positionState);
        switch (inputMode.id) {
            case 'concept':
                return null;
            case 'progression':
                const isLast = position === source.progression.length - 1;
                return isLast ? 0 : position + 1;
            case 'chart':
                const [s, r, c] = position;
                const isLastSection = s === source.sections.length - 1;
                const isLastRow = r === source.sections[s].rows.length - 1;
                const isLastCol = c === source.sections[s].rows[r].progression.length - 1;
                if (isLastCol) {
                    if (isLastRow) {
                        if (isLastSection) {
                            return [0, 0, 0];
                        }
                        return [s + 1, 0, 0];
                    }
                    return [s, r + 1, 0];
                }
                return [s, r, c + 1];
        }
    }
});

export const nextConceptState = selector({
    key: 'nextConcept',
    get: ({ get }) => {
        const inputMode = get(inputModeState);
        const source = get(sourceState);
        const nextPosition = get(nextPositionState);
        switch (inputMode.id) {
            case 'concept':
                return source;
            case 'progression':
                return source.progression[nextPosition];
            case 'chart':
                const [s, r, c] = nextPosition;
                return source.sections[s].rows[r].progression[c];
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