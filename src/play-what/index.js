import { Fretboard, Keyboard, KeyboardKeyType } from 'play-what-beta';

import { KeyCenter } from './Classes/KeyCenter';

import { TONIC, ACCIDENTAL } from './Constants/Enums';
import { INTERVAL_PAIR, CHORD, SCALE, MODE } from './Constants/Presets';

import { ActionStrategies } from './Strategies/ActionStrategies';
import { ColorStrategies } from './Strategies/ColorStrategies';
import { FilterStrategies } from './Strategies/FilterStrategies';
import { LabelStrategies } from './Strategies/LabelStrategies';
import { NoteStrategies } from './Strategies/NoteStrategies';

import { ColorUtils, COLORS } from './Utils/ColorUtils';

export {
    Fretboard,
    Keyboard,
    KeyboardKeyType,
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
    NoteStrategies,
    ColorUtils,
    COLORS
};