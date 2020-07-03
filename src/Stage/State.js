import { atom, selector } from 'recoil';
import AUTUMN_LEAVES from '../Common/AutumnLeaves';
import Viewers from 'play-what-react-viewers';

const { UI, Modules } = Viewers;
const { ButtonInput } = UI;
const { Concept, Progression, Chart } = Modules;

export const INPUT_MODES = [
    {
        id: 'concept',
        name: 'Concept',
        label: '•',
        component: Concept,
        presets: [AUTUMN_LEAVES.sections[0].rows[0].cols[0]],
        startPosition: null
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••',
        component: Progression,
        presets: [AUTUMN_LEAVES.sections[0].rows[0]],
        startPosition: 0
    },
    {
        id: 'chart',
        name: 'Chart',
        label: '••••',
        component: Chart,
        presets: [AUTUMN_LEAVES],
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

export const noteState = selector({
    key: 'note',
    get: ({ get }) => {
        const inputMode = get(inputModeState);
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
    }
})