import { INTERVAL_PAIR, CHORD, SCALE, MODE } from './Presets';
import { TONIC, ACCIDENTAL } from './Enums';

//export const DEFAULT_COLOR_STRATEGY = COLOR_STRATEGIES.Degree;

//export const DEFAULT_LABEL_STRATEGY = LABEL_STRATEGIES.Interval;

export const DEFAULT_KEY_CENTER = {
    tonic: TONIC.C,
    accidental: ACCIDENTAL.Natural,
    octave: 4
};

export const DEFAULT_CONCEPT = CHORD.Maj;
export const DEFAULT_NOTE_FILTER = () => true;

export const DEFAULT_NOTE_STRATEGY = () => true;