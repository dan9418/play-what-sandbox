import { Interval } from "../Classes/Interval"
import { IntervalPair } from "../Classes/IntervalPair";
import { Chord } from "../Classes/Chord";
import { HeptatonicScale } from "../Classes/HeptatonicScale";
import { Scale } from "../Classes/Scale";

/***** Intervals *****/

export const INTERVAL = {
    P1: new Interval(1, 0, 'P1', 'Perfect Unison'),
    m2: new Interval(2, 1, 'm2', 'Minor 2nd'),
    M2: new Interval(2, 2, 'M2', 'Major 2nd'),
    A2: new Interval(2, 3, 'A2', 'Augmented 2nd'),
    d3: new Interval(3, 2, 'd3', 'Diminished 3rd'),
    m3: new Interval(3, 3, 'm3', 'Minor 3rd'),
    M3: new Interval(3, 4, 'M3', 'Major 3rd'),
    A3: new Interval(3, 5, 'A3', 'Augmented 3rd'),
    d4: new Interval(4, 4, 'd4', 'Diminished 4th'),
    P4: new Interval(4, 5, 'P4', 'Perfect 4th'),
    A4: new Interval(4, 6, 'A4', 'Augmented 4th'),
    d5: new Interval(5, 6, 'd5', 'Diminished 5th'),
    P5: new Interval(5, 7, 'P5', 'Perfect 5th'),
    A5: new Interval(5, 8, 'A5', 'Augmented 5th'),
    d6: new Interval(6, 7, 'd6', 'Diminished 6th'),
    m6: new Interval(6, 8, 'm6', 'Minor 6th'),
    M6: new Interval(6, 9, 'M6', 'Major 6th'),
    A6: new Interval(6, 10, 'A6', 'Augmented 6th'),
    d7: new Interval(7, 9, 'd7', 'Diminished 7th'),
    m7: new Interval(7, 10, 'm7', 'Minor 7th'),
    M7: new Interval(7, 11, 'M7', 'Major 7th'),
    P8: new Interval(8, 12, 'P8', 'Octave'),
    flat9: new Interval(9, 13, 'b9', 'Flat Ninth'),
    ext9: new Interval(9, 14, '9', 'Ninth'),
    sharp9: new Interval(9, 15, '#9', 'Sharp Ninth'),
    flat11: new Interval(11, 16, 'b11', 'Flat Eleventh'),
    ext11: new Interval(11, 17, '11', 'Eleventh'),
    sharp11: new Interval(11, 18, '#11', 'Sharp Eleventh'),
    P12: new Interval(12, 19, 'P12', 'Perfect 12th'),
    flat13: new Interval(13, 20, 'b13', 'Flat Thirteenth'),
    ext13: new Interval(13, 21, '13', 'Thirteenth'),
    sharp13: new Interval(13, 22, '#13', 'Sharp Thirteenth'),
    flat15: new Interval(15, 23, 'b15', 'Flat Fifthteenth'),
    ext15: new Interval(15, 24, '15', 'Fifthteenth')
};

/***** Concepts *****/

export const INTERVAL_PAIR = {
    P1: new IntervalPair(null, INTERVAL.P1.id, INTERVAL.P1.name, [INTERVAL.P1, INTERVAL.P1]),
    m2: new IntervalPair(null, INTERVAL.m2.id, INTERVAL.m2.name, [INTERVAL.P1, INTERVAL.m2]),
    M2: new IntervalPair(null, INTERVAL.M2.id, INTERVAL.M2.name, [INTERVAL.P1, INTERVAL.M2]),
    A2: new IntervalPair(null, INTERVAL.A2.id, INTERVAL.A2.name, [INTERVAL.P1, INTERVAL.A2]),
    d3: new IntervalPair(null, INTERVAL.d3.id, INTERVAL.d3.name, [INTERVAL.P1, INTERVAL.d3]),
    m3: new IntervalPair(null, INTERVAL.m3.id, INTERVAL.m3.name, [INTERVAL.P1, INTERVAL.m3]),
    M3: new IntervalPair(null, INTERVAL.M3.id, INTERVAL.M3.name, [INTERVAL.P1, INTERVAL.M3]),
    P4: new IntervalPair(null, INTERVAL.P4.id, INTERVAL.P4.name, [INTERVAL.P1, INTERVAL.P4]),
    A4: new IntervalPair(null, INTERVAL.A4.id, INTERVAL.A4.name, [INTERVAL.P1, INTERVAL.A4]),
    d5: new IntervalPair(null, INTERVAL.d5.id, INTERVAL.d5.name, [INTERVAL.P1, INTERVAL.d5]),
    P5: new IntervalPair(null, INTERVAL.P5.id, INTERVAL.P5.name, [INTERVAL.P1, INTERVAL.P5]),
    A5: new IntervalPair(null, INTERVAL.A5.id, INTERVAL.A5.name, [INTERVAL.P1, INTERVAL.A5]),
    d6: new IntervalPair(null, INTERVAL.d6.id, INTERVAL.d6.name, [INTERVAL.P1, INTERVAL.d6]),
    m6: new IntervalPair(null, INTERVAL.m6.id, INTERVAL.m6.name, [INTERVAL.P1, INTERVAL.m6]),
    M6: new IntervalPair(null, INTERVAL.M6.id, INTERVAL.M6.name, [INTERVAL.P1, INTERVAL.M6]),
    d7: new IntervalPair(null, INTERVAL.d7.id, INTERVAL.d7.name, [INTERVAL.P1, INTERVAL.d7]),
    m7: new IntervalPair(null, INTERVAL.m7.id, INTERVAL.m7.name, [INTERVAL.P1, INTERVAL.m7]),
    M7: new IntervalPair(null, INTERVAL.M7.id, INTERVAL.M7.name, [INTERVAL.P1, INTERVAL.M7])
};

export const CHORD = {
    // Major
    Maj: new Chord(null, 'Maj', 'Major Triad', [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5]),
    Maj6: new Chord(null, 'Maj6', 'Major 6th', [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]),
    Maj7: new Chord(null, 'Maj7', 'Major 7th', [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]),
    // Minor
    Min: new Chord(null, 'Min', 'Minor Triad', [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5]),
    Min6: new Chord(null, 'Min6', 'Minor 6th', [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6]),
    Min7: new Chord(null, 'Min7', 'Minor 7th', [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7]),
    MinMaj7: new Chord(null, 'MinMaj7', 'Minor-Major 7th', [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7]),
    // Dominant
    Dom7: new Chord(null, 'Dom7', 'Dominant 7th', [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7]),
    // Augmented
    Aug: new Chord(null, 'Aug', 'Augmented Triad', [INTERVAL.P1, INTERVAL.M3, INTERVAL.A5]),
    Aug7: new Chord(null, 'Aug7', 'Augmented 7th', [INTERVAL.P1, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7]),
    // Diminished
    Dim: new Chord(null, 'Dim', 'Diminished Triad', [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5]),
    Dim7: new Chord(null, 'Dim7', 'Diminished 7th', [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7]),
    HalfDim7: new Chord(null, 'HalfDim7', 'Half-Diminished 7th', [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7]),
    // Suspended
    Sus2: new Chord(null, 'Sus2', 'Suspended 2nd', [INTERVAL.P1, INTERVAL.M2, INTERVAL.P5]),
    Sus4: new Chord(null, 'Sus4', 'Suspended 4th', [INTERVAL.P1, INTERVAL.P4, INTERVAL.P5]),
    // Extended
    Maj9: new Chord(null, 'Maj9', 'Major 9th', [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.ext9]),
    Maj11: new Chord(null, 'Maj11', 'Major 11th', [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.ext9, INTERVAL.ext11]),
    Maj13: new Chord(null, 'Maj13', 'Major 13th', [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.ext9, INTERVAL.ext11, INTERVAL.ext13]),
};

export const SCALE = {
    // Major
    Major: new HeptatonicScale(null, 'Major', 'Major', [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]),
    // Minor
    NatualMinor: new HeptatonicScale(null, 'NaturalMinor', 'Natural Minor', [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]),
    HarmonicMinor: new HeptatonicScale(null, 'HarmonicMinor', 'Harmonic Minor', [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7]),
    // Pentatonic
    MajorPentatonic: new Scale (null, 'MajorPentatonic', 'Major Pentatonic', [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]),
    MinorPentatonic: new Scale (null, 'MinorPentatonic', 'Minor Pentatonic', [INTERVAL.P1, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7]),
    // Chromatic
    Chromatic: new Scale(null, 'Chromatic', 'Chromatic', [INTERVAL.P1, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.A4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7])
};

export const MODE = {
    Ionian: new HeptatonicScale(null, 'Ionian', 'Ionian', [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]),
    Dorian: new HeptatonicScale(null, 'Dorian', 'Dorian', [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]),
    Phrygian: new HeptatonicScale(null, 'Phrygian', 'Phrygian', [INTERVAL.P1, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]),
    Lydian: new HeptatonicScale(null, 'Lydian', 'Lydian', [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]),
    Mixolydian: new HeptatonicScale(null, 'Mixolydian', 'Mixolydian', [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]),
    Aeolian: new HeptatonicScale(null, 'Aeolian', 'Aeolian', [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]),
    Locrian: new HeptatonicScale(null, 'Locrian', 'Locrian', [INTERVAL.P1, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7])
};
