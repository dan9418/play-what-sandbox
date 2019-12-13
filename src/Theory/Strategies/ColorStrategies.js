import { ColorTools, COLORS } from "./ColorTools";

export const DEFAULT_COLOR_SCHEMES = {
    binary: [
        null,
        COLORS.Red
    ],
    degree: [
        null,
        COLORS.Red,
        COLORS.Orange,
        COLORS.Yellow,
        COLORS.Green,
        COLORS.Blue,
        COLORS.Purple,
        COLORS.Pink,
        COLORS.Red,
        COLORS.Orange,
        COLORS.Yellow,
        COLORS.Green,
        COLORS.Blue,
        COLORS.Purple,
        COLORS.Pink,
        COLORS.Red
    ],
    pitchClass: [
        COLORS.pc0,
        COLORS.pc1,
        COLORS.pc2,
        COLORS.pc3,
        COLORS.pc4,
        COLORS.pc5,
        COLORS.pc6,
        COLORS.pc7,
        COLORS.pc8,
        COLORS.pc9,
        COLORS.pc10,
        COLORS.pc11
    ],
    octave: [
        COLORS.Black,
        COLORS.White
    ],
    frequency: [
        COLORS.Black,
        COLORS.White
    ],
    noteIndex: [
        COLORS.Black,
        COLORS.White
    ]
};

export class ColorStrategies {
    static none() {
        return {};
    }

    static binary(note, scheme = DEFAULT_COLOR_SCHEMES.binary) {
        return (!note || !note.interval) ? ColorTools.discrete(0, scheme) : ColorTools.discrete(1, scheme);
    }

    static degree(note, scheme = DEFAULT_COLOR_SCHEMES.degree) {
        return (!note || !note.interval) ? ColorTools.discrete(0, scheme) : ColorTools.discrete(note.interval.degree, scheme);
    }

    static pitchClass(note, scheme = DEFAULT_COLOR_SCHEMES.pitchClass) {
        return ColorTools.discrete(note.pitchClass, scheme);
    }

    static octave(note, minNote, maxNote, scheme = DEFAULT_COLOR_SCHEMES.octave) {
        let currentOctave = note.octave;
        let minOctave = minNote.octave;
        let maxOctave = maxNote.octave;

        return ColorTools.continuous(currentOctave, minOctave, maxOctave, scheme);
    }

    static frequency(note, minNote, maxNote, scheme = DEFAULT_COLOR_SCHEMES.frequency) {
        let currentFrequency = note.frequency;
        let minFrequency = minNote.frequency;
        let maxFrequency = maxNote.frequency;

        return ColorTools.continuous(currentFrequency, minFrequency, maxFrequency, scheme);
    }

    static noteIndex(note, minNote, maxNote, scheme = DEFAULT_COLOR_SCHEMES.noteIndex) {
        let currentIndex = note.noteIndex;
        let minIndex = minNote.noteIndex;
        let maxIndex = maxNote.noteIndex;

        return ColorTools.continuous(currentIndex, minIndex, maxIndex, scheme);
    }
}