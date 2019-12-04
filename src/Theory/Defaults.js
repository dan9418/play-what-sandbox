import { INTERVAL, Utils, TheoryEngine, LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';

export const DEFAULT_COLOR_STRATEGY = COLOR_STRATEGIES.Degree;

export const DEFAULT_LABEL_STRATEGY = LABEL_STRATEGIES.Interval;

export const DEFAULT_KEY_CENTER = {
    tonic: TONIC.E,
    accidental: ACCIDENTAL.Natural,
    octave: 3
};

export const DEFAULT_CONCEPT = {
    //intervals: MODE.Ionian.intervals,
    intervals: CHORD.Maj.intervals,
    //intervals: CHORD.Maj13.intervals,
    //intervals: SCALE.Chromatic.intervals,
    chordInversion: 0
};

export const DEFAULT_NOTE_FILTER = () => true;

export const DEFAULT_NOTE_STRATEGY = () => true;