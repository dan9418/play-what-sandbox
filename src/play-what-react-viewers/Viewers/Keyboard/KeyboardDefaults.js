import { Theory, Strategies, Utils } from '../../../play-what/index';


import {
    KeyboardColorStrategies,
    KeyboardLabelStrategies
} from './KeyboardStrategies';

import { KeyCenterInput } from '../../Inputs/KeyCenterInput/KeyCenterInput';
import { ConceptInput } from '../../Inputs/ConceptInput/ConceptInput';
import { StrategyInput } from '../../Inputs/StrategyInput/StrategyInput';

export const DEFAULT_KEYBOARD_STATE = {
    keyCenter:   new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
    concept: Theory.Presets.CHORD.Maj7,
    mappingStrategy: Strategies.Mapping.getNoteByNoteIndex,
    colorStrategy: KeyboardColorStrategies.degree,
    actionStrategy: Strategies.Action.sound,
    labelStrategy: KeyboardLabelStrategies.interval
}

export const DEFAULT_KEYBOARD_INPUTS = [];