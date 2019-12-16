import {
    Fretboard,
    Keyboard,
    KeyCenter,
    TONIC,
    ACCIDENTAL,
    INTERVAL_PAIR,
    CHORD,
    SCALE,
    MODE,
    ActionStrategies,
    ColorStrategies,
    FilterStrategies,
    LabelStrategies,
    MappingStrategies
} from '../../../play-what/index';

import {
    FretboardColorStrategies,
    FretboardLabelStrategies,
    FretboardFilterStrategies
} from './FretboardStrategies';

import { KeyCenterInput } from '../../Inputs/KeyCenterInput/KeyCenterInput';
import { ConceptInput } from '../../Inputs/ConceptInput/ConceptInput';
import { StrategyInput } from '../../Inputs/StrategyInput/StrategyInput';

export const DEFAULT_FRETBOARD_STATE = {
    keyCenter: new KeyCenter(TONIC.C, ACCIDENTAL.Natural, 4),
    concept: CHORD.Maj7,
    mappingStrategy: MappingStrategies.getNoteByNoteIndex,
    colorStrategy: FretboardColorStrategies.degree,
    actionStrategy: ActionStrategies.sound,
    labelStrategy: FretboardLabelStrategies.interval
};

export const DEFAULT_FRETBOARD_INPUTS = [
    {
        id: 'keyCenter',
        name: 'Key Center',
        component: KeyCenterInput
    },
    {
        id: 'concept',
        name: 'Concept',
        component: ConceptInput
    },
    {
        id: 'mappingStrategy',
        name: 'Mapping Strategy',
        component: StrategyInput,
        props: {
            data: [
                {
                    id: 'noteIndex',
                    name: 'Note Index',
                    fx: MappingStrategies.getNoteByNoteIndex
                },
                {
                    id: 'pitchClass',
                    name: 'Pitch Class',
                    fx: MappingStrategies.getNoteByPitchClass
                }
            ]
        }
    },
    {
        id: 'colorStrategy',
        name: 'Color Strategy',
        component: StrategyInput,
        props: {
            data: [
                {
                    id: 'none',
                    name: 'None',
                    fx: ColorStrategies.none
                },
                {
                    id: 'binary',
                    name: 'Binary',
                    fx: ColorStrategies.binary
                },
                {
                    id: 'degree',
                    name: 'Degree',
                    fx: ColorStrategies.degree
                },
                {
                    id: 'pitchClass',
                    name: 'Pitch Class',
                    fx: ColorStrategies.pitchClass
                },
                {
                    id: 'noteIndex',
                    name: 'Note Index',
                    fx: ColorStrategies.noteIndex
                },
                {
                    id: 'octave',
                    name: 'Octave',
                    fx: ColorStrategies.octave
                },
                {
                    id: 'frequency',
                    name: 'Frequency',
                    fx: ColorStrategies.frequency
                }
            ]
        }
    },
    {
        id: 'labelStrategy',
        name: 'Label Strategy',
        component: StrategyInput,
        props: {
            data: [
                {
                    id: 'none',
                    name: 'None',
                    fx: LabelStrategies.none
                },
                {
                    id: 'degree',
                    name: 'Degree',
                    fx: LabelStrategies.degree
                },
                {
                    id: 'interval',
                    name: 'Interval',
                    fx: LabelStrategies.interval
                },
                {
                    id: 'pitchClass',
                    name: 'Pitch Class',
                    fx: LabelStrategies.pitchClass
                },
                {
                    id: 'noteIndex',
                    name: 'Note Index',
                    fx: LabelStrategies.noteIndex
                },
                {
                    id: 'octave',
                    name: 'Octave',
                    fx: LabelStrategies.octave
                },
                {
                    id: 'frequency',
                    name: 'Frequency',
                    fx: LabelStrategies.frequency
                }
            ]
        }
    }
];