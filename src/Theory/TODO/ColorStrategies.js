//TODO re-implement

import { blendColors, pickTextColorBasedOnBgColorSimple } from "./ColorTools";
import { Note } from "../Classes/Note";

const COLORS = {
    White: 'white',
    Black: 'black',
    Red: '#E6194B',
    Orange: '#F58231',
    Yellow: '#FFE119',
    Green: '#3CB44B',
    Blue: '#4363D8',
    Purple: '#911DB4',
    Pink: '#F032E6'
};

// None

const colorNone = () => {
    return {};
}

// Binary

const DEFAULT_BINARY_COLOR_SCHEME = {
    active: {
        backgroundColor: COLORS.Red,
        color: COLORS.White
    },
    inactive: {}
}

const colorBinary = (note, scheme = DEFAULT_BINARY_COLOR_SCHEME) => {
    return (!!note) ? 
        (scheme.active || {}) :
        (scheme.inactive || {});
}

// Degree

const DEFAULT_DEGREE_COLOR_SCHEME = {
    degree1: {
        backgroundColor: COLORS.Red,
        color: COLORS.White
    },
    degree2: {
        backgroundColor: COLORS.Orange,
        color: COLORS.White
    },
    degree3: {
        backgroundColor: COLORS.Yellow,
        color: COLORS.Black
    },
    degree4: {
        backgroundColor: COLORS.Green,
        color: COLORS.White
    },
    degree5: {
        backgroundColor: COLORS.Blue,
        color: COLORS.White
    },
    degree6: {
        backgroundColor: COLORS.Purple,
        color: COLORS.White
    },
    degree7: {
        backgroundColor: COLORS.Pink,
        color: COLORS.White
    },
    // Extended
    degree8: {
        backgroundColor: COLORS.Red,
        color: COLORS.White
    },
    degree9: {
        backgroundColor: COLORS.Orange,
        color: COLORS.White
    },
    degree10: {
        backgroundColor: COLORS.Yellow,
        color: COLORS.Black
    },
    degree11: {
        backgroundColor: COLORS.Green,
        color: COLORS.White
    },
    degree12: {
        backgroundColor: COLORS.Blue,
        color: COLORS.White
    },
    degree13: {
        backgroundColor: COLORS.Purple,
        color: COLORS.White
    },
    degree14: {
        backgroundColor: COLORS.Pink,
        color: COLORS.White
    },
    degree15: {
        backgroundColor: COLORS.Red,
        color: COLORS.White
    }
}

const colorDegree = (note, scheme = DEFAULT_DEGREE_COLOR_SCHEME) => {
    if (!note || !note.interval) return {}
    // Check if degree has a style definition
    else if (typeof scheme[`degree${note.interval.degree}`] !== 'object' || scheme[`degree${note.interval.degree}`] === null)
        return {};
    // Return style mapping
    else
        return scheme[`degree${note.interval.degree}`];
}

// Pitch Class

const DEFAULT_PITCH_CLASS_COLOR_SCHEME = {
    pitchClass0: {
        backgroundColor: '#ED1C24',
        color: COLORS.White
    },
    pitchClass1: {
        backgroundColor: '#F1592A',
        color: COLORS.White
    },
    pitchClass2: {
        backgroundColor: '#F8981E',
        color: COLORS.White
    },
    pitchClass3: {
        backgroundColor: '#FCB040',
        color: COLORS.Black
    },
    pitchClass4: {
        backgroundColor: '#FFF200',
        color: COLORS.Black
    },
    pitchClass5: {
        backgroundColor: '#8CC63F',
        color: COLORS.Black
    },
    pitchClass6: {
        backgroundColor: '#056839',
        color: COLORS.White
    },
    pitchClass7: {
        backgroundColor: '#13A89E',
        color: COLORS.White
    },
    pitchClass8: {
        backgroundColor: '#A898C8',
        color: COLORS.White
    },
    pitchClass9: {
        backgroundColor: '#662D91',
        color: COLORS.White
    },
    pitchClass10: {
        backgroundColor: '#92278F',
        color: COLORS.White
    },
    pitchClass11: {
        backgroundColor: '#C2305E',
        color: COLORS.White
    },
}

const colorPitchClass = (note, scheme = DEFAULT_PITCH_CLASS_COLOR_SCHEME) => {
    if (!note)
        return {};
    // Check if pitchClass has a style definition
    else if (typeof scheme[`pitchClass${note.pitchClass}`] !== 'object' || scheme[`pitchClass${note.pitchClass}`] === null)
        return {};
    // Return style mapping
    else
        return scheme[`pitchClass${note.pitchClass}`];
}

// Relative Properties

const DEFAULT_CONTINUOUS_COLOR_SCHEME = {
    initialColor: '#000000',
    finalColor: '#FFFFFF'
}

const colorRelativeNoteProperty = (value, min, max, colorScheme = DEFAULT_CONTINUOUS_COLOR_SCHEME) => {
    let percent = (value - min) / (max - min);
    percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

    let colorBlend = blendColors(colorScheme.initialColor, colorScheme.finalColor, percent);

    return {
        backgroundColor: colorBlend,
        color: pickTextColorBasedOnBgColorSimple(colorBlend)
    };
}

const colorOctave = (noteProfile, viewerProfile) => {
    if(!noteProfile || !viewerProfile) return {};
    return colorRelativeNoteProperty(noteProfile.noteOctave, Note.getFrequency(viewerProfile.minIndex), Note.getFrequency.getPhysicalNoteOctave(viewerProfile.maxIndex))
}

const colorFrequency = (noteProfile, viewerProfile) => {
    if(!noteProfile || !viewerProfile) return {};
    return colorRelativeNoteProperty(noteProfile.frequency, Note.getFrequency.getFrequency(viewerProfile.minIndex), Note.getFrequency.getFrequency(viewerProfile.maxIndex))
}

const colorNoteIndex = (noteProfile, viewerProfile) => {
    if(!noteProfile || !viewerProfile) return {};
    return colorRelativeNoteProperty(noteProfile.noteIndex, viewerProfile.minIndex, viewerProfile.maxIndex)
}

export const COLOR_STRATEGIES = {
    None: () => colorNone(),
    Active: (noteProfile, viewerProfile) => colorBinary(noteProfile),
    Degree: (noteProfile, viewerProfile) => colorDegree(noteProfile),
    PitchClass: (noteProfile, viewerProfile) => colorPitchClass(noteProfile),
    Octave: (noteProfile, viewerProfile) => colorOctave(noteProfile, viewerProfile),
    Frequency: (noteProfile, viewerProfile) => colorFrequency(noteProfile, viewerProfile),
    NoteIndex: (noteProfile, viewerProfile) => colorNoteIndex(noteProfile, viewerProfile)
}
