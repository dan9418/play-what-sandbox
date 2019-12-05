import { Interval } from "../Classes/Interval"

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
    P1: {
        id: INTERVAL.P1.id,
        name: INTERVAL.P1.name,
        intervals: [INTERVAL.P1, INTERVAL.P1]
    },
    m2: {
        id: INTERVAL.m2.id,
        name: INTERVAL.m2.name,
        intervals: [INTERVAL.P1, INTERVAL.m2]
    },
    M2: {
        id: INTERVAL.M2.id,
        name: INTERVAL.M2.name,
        intervals: [INTERVAL.P1, INTERVAL.M2]
    },
    A2: {
        id: INTERVAL.A2.id,
        name: INTERVAL.A2.name,
        intervals: [INTERVAL.P1, INTERVAL.A2]
    },
    d3: {
        id: INTERVAL.d3.id,
        name: INTERVAL.d3.name,
        intervals: [INTERVAL.P1, INTERVAL.d3]
    },
    m3: {
        id: INTERVAL.m3.id,
        name: INTERVAL.m3.name,
        intervals: [INTERVAL.P1, INTERVAL.m3]
    },
    M3: {
        id: INTERVAL.M3.id,
        name: INTERVAL.M3.name,
        intervals: [INTERVAL.P1, INTERVAL.M3]
    },
    P4: {
        id: INTERVAL.P4.id,
        name: INTERVAL.P4.name,
        intervals: [INTERVAL.P1, INTERVAL.P4]
    },
    A4: {
        id: INTERVAL.A4.id,
        name: INTERVAL.A4.name,
        intervals: [INTERVAL.P1, INTERVAL.A4]
    },
    d5: {
        id: INTERVAL.d5.id,
        name: INTERVAL.d5.name,
        intervals: [INTERVAL.P1, INTERVAL.d5]
    },
    P5: {
        id: INTERVAL.P5.id,
        name: INTERVAL.P5.name,
        intervals: [INTERVAL.P1, INTERVAL.P5]
    },
    A5: {
        id: INTERVAL.A5.id,
        name: INTERVAL.A5.name,
        intervals: [INTERVAL.P1, INTERVAL.A5]
    },
    d6: {
        id: INTERVAL.d6.id,
        name: INTERVAL.d6.name,
        intervals: [INTERVAL.P1, INTERVAL.d6]
    },
    m6: {
        id: INTERVAL.m6.id,
        name: INTERVAL.m6.name,
        intervals: [INTERVAL.P1, INTERVAL.m6]
    },
    M6: {
        id: INTERVAL.M6.id,
        name: INTERVAL.M6.name,
        intervals: [INTERVAL.P1, INTERVAL.M6]
    },
    d7: {
        id: INTERVAL.d7.id,
        name: INTERVAL.d7.name,
        intervals: [INTERVAL.P1, INTERVAL.d7]
    },
    m7: {
        id: INTERVAL.m7.id,
        name: INTERVAL.m7.name,
        intervals: [INTERVAL.P1, INTERVAL.m7]
    },
    M7: {
        id: INTERVAL.M7.id,
        name: INTERVAL.M7.name,
        intervals: [INTERVAL.P1, INTERVAL.M7]
    }
};

export const CHORD = {
    // Major
    Maj: {
        id: 'Maj',
        name: 'Major Triad',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5]
    },
    Maj6: {
        id: 'Maj6',
        name: 'Major 6th',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    Maj7: {
        id: 'Maj7',
        name: 'Major 7th',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
    },
    // Minor
    Min: {
        id: 'Min',
        name: 'Minor Triad',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5]
    },
    Min6: {
        id: 'Min6',
        name: 'Minor 6th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6]
    },
    Min7: {
        id: 'Min7',
        name: 'Minor 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7]
    },
    MinMaj7: {
        id: 'MinMaj7',
        name: 'Minor-Major 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7]
    },
    // Dominant
    Dom7: {
        id: 'Dom7',
        name: 'Dominant 7th',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7]
    },
    // Augmented
    Aug: {
        id: 'Aug',
        name: 'Augmented Triad',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.A5]
    },
    Aug7: {
        id: 'Aug7',
        name: 'Augmented Seventh',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7]
    },
    // Diminished
    Dim: {
        id: 'Dim',
        name: 'Diminished Triad',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5]
    },
    Dim7: {
        id: 'Dim7',
        name: 'Diminished 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7]
    },
    HalfDim7: {
        id: 'HalfDim7',
        name: 'Half-Diminished 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7]
    },
    // Suspended
    Sus2: {
        id: 'Sus2',
        name: 'Suspended 2nd',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.P5]
    },
    Sus4: {
        id: 'Sus4',
        name: 'Suspended 4th',
        intervals: [INTERVAL.P1, INTERVAL.P4, INTERVAL.P5]
    },
    // Extended
    Maj9: {
        id: 'Maj9',
        name: 'Major Ninth',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.ext9]
    },
    Maj11: {
        id: 'Maj11',
        name: 'Major Eleventh',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.ext9, INTERVAL.ext11]
    },
    Maj13: {
        id: 'Maj13',
        name: 'Major Thirteenth',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.ext9, INTERVAL.ext11, INTERVAL.ext13]
    }
};

export const SCALE = {
    // Major
    Major: {
        id: 'Major',
        name: 'Major',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    // Minor
    NatualMinor: {
        id: 'NatualMinor',
        name: 'Natual Minor',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    HarmonicMinor: {
        id: 'HarmonicMinor',
        name: 'Harmonic Minor',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7]
    },
    // Pentatonic
    MajorPentatonic: {
        id: 'MajorPentatonic',
        name: 'Major Pentatonic',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    MinorPentatonic: {
        id: 'MinorPentatonic',
        name: 'Minor Pentatonic',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7]
    },
    // Chromatic
    Chromatic: {
        id: 'Chromatic',
        name: 'Chromatic',
        intervals: [INTERVAL.P1, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.A4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7]
    }
};

export const MODE = {
    Ionian: {
        id: 'Ionian',
        name: 'Ionian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    Dorian: {
        id: 'Dorian',
        name: 'Dorian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    Phrygian: {
        id: 'Phrygian',
        name: 'Phrygian',
        intervals: [INTERVAL.P1, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    Lydian: {
        id: 'Lydian',
        name: 'Lydian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    Mixolydian: {
        id: 'Mixolydian',
        name: 'Mixolydian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    Aeolian: {
        id: 'Aeolian',
        name: 'Aeolian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    Locrian: {
        id: 'Locrian',
        name: 'Locrian',
        intervals: [INTERVAL.P1, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7]
    }
};
