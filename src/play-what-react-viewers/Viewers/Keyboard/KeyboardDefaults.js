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
    KeyboardColorStrategies,
    KeyboardLabelStrategies
} from './KeyboardStrategies';

import { KeyCenterInput } from '../../Inputs/KeyCenterInput/KeyCenterInput';
import { ConceptInput } from '../../Inputs/ConceptInput/ConceptInput';
import { StrategyInput } from '../../Inputs/StrategyInput/StrategyInput';

export const DEFAULT_KEYBOARD_STATE = {
    keyCenter:  new KeyCenter(TONIC.C, ACCIDENTAL.Natural, 4),
    concept: CHORD.Maj7,
    mappingStrategy: MappingStrategies.getNoteByNoteIndex,
    colorStrategy: KeyboardColorStrategies.degree,
    actionStrategy: ActionStrategies.sound,
    labelStrategy: KeyboardLabelStrategies.interval
}

export const DEFAULT_KEYBOARD_INPUTS = [];