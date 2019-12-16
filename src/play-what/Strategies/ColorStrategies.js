import ColorUtils from "../Utils/ColorUtils";

const DEFAULT_COLOR_SCHEMES = {
    binary: [
        null,
        ColorUtils.COLORS.Red
    ],
    degree: [
        null,
        ColorUtils.COLORS.Red,
        ColorUtils.COLORS.Orange,
        ColorUtils.COLORS.Yellow,
        ColorUtils.COLORS.Green,
        ColorUtils.COLORS.Blue,
        ColorUtils.COLORS.Purple,
        ColorUtils.COLORS.Pink,
        ColorUtils.COLORS.Red,
        ColorUtils.COLORS.Orange,
        ColorUtils.COLORS.Yellow,
        ColorUtils.COLORS.Green,
        ColorUtils.COLORS.Blue,
        ColorUtils.COLORS.Purple,
        ColorUtils.COLORS.Pink,
        ColorUtils.COLORS.Red
    ],
    pitchClass: [
        ColorUtils.COLORS.pc0,
        ColorUtils.COLORS.pc1,
        ColorUtils.COLORS.pc2,
        ColorUtils.COLORS.pc3,
        ColorUtils.COLORS.pc4,
        ColorUtils.COLORS.pc5,
        ColorUtils.COLORS.pc6,
        ColorUtils.COLORS.pc7,
        ColorUtils.COLORS.pc8,
        ColorUtils.COLORS.pc9,
        ColorUtils.COLORS.pc10,
        ColorUtils.COLORS.pc11
    ],
    octave: [
        ColorUtils.COLORS.Black,
        ColorUtils.COLORS.White
    ],
    frequency: [
        ColorUtils.COLORS.Black,
        ColorUtils.COLORS.White
    ],
    noteIndex: [
        ColorUtils.COLORS.Black,
        ColorUtils.COLORS.White
    ]
};

export default class ColorStrategies {
    static none() {
        return {};
    }

    static binary(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.binary) {
        return (!note || !note.interval) ? ColorUtils.discrete(0, scheme) : ColorUtils.discrete(1, scheme);
    }

    static degree(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.degree) {
        return (!note || !note.interval) ? ColorUtils.discrete(0, scheme) : ColorUtils.discrete(note.interval.degree, scheme);
    }

    static pitchClass(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.pitchClass) {
        return ColorUtils.discrete(note.pitchClass, scheme);
    }

    static octave(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.octave) {
        let currentOctave = note.octave;
        let minOctave = viewerData.minNote.octave;
        let maxOctave = viewerData.maxNote.octave;

        return ColorUtils.continuous(currentOctave, minOctave, maxOctave, scheme);
    }

    static frequency(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.frequency) {
        let currentFrequency = note.frequency;
        let minFrequency = viewerData.minNote.frequency;
        let maxFrequency = viewerData.maxNote.frequency;

        return ColorUtils.continuous(currentFrequency, minFrequency, maxFrequency, scheme);
    }

    static noteIndex(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.noteIndex) {
        let currentIndex = note.noteIndex;
        let minIndex = viewerData.minNote.noteIndex;
        let maxIndex = viewerData.maxNote.noteIndex;

        return ColorUtils.continuous(currentIndex, minIndex, maxIndex, scheme);
    }
}