import { blendColors, pickTextColorBasedOnBgColorSimple } from "./ColorTools";
import { DEFAULT_COLOR_PROFILE } from "./ColorConfig";

export class ColorStrategies {
    static none() {
        return {};
    }

    static binary(note, viewerData, scheme = DEFAULT_COLOR_PROFILE.binary) {
        return (!!note) ? scheme[1] : scheme[0];
    }

    static degree(note, viewerData, scheme = DEFAULT_COLOR_PROFILE.degree) {
        if (!note || !note.interval) {
            return scheme[0];
        } else {
            return scheme[note.interval.degree];
        }
    }

    static pitchClass(note, viewerData, scheme = DEFAULT_COLOR_PROFILE.pitchClass) {
        return scheme[note.pitchClass];
    }

    static octave(note, viewerData, scheme = DEFAULT_COLOR_PROFILE.Octave) {
        if (!note || !viewerData) return {};

        let currentOctave = note.noteOctave;
        let minOctave = viewerData.minNote.noteOctave;
        let maxOctave = viewerData.maxNote.noteOctave;

        return ColorStrategies.percentage(currentOctave, minOctave, maxOctave, scheme);
    }

    static frequency(note, viewerData, scheme = DEFAULT_COLOR_PROFILE.Frequency) {
        if (!note || !viewerData) return {};

        let currentFrequency = note.frequency;
        let minFrequency = viewerData.minNote.frequency;
        let maxFrequency = viewerData.maxNote.frequency;

        return ColorStrategies.percentage(currentFrequency, minFrequency, maxFrequency, scheme);
    }

    static noteIndex(note, viewerData, scheme = DEFAULT_COLOR_PROFILE.noteIndex) {
        if (!note || !viewerData) return {};

        let currentIndex = note.noteIndex;
        let minIndex = viewerData.minNote.noteIndex;
        let maxIndex = viewerData.maxNote.noteIndex;

        return ColorStrategies.percentage(currentIndex, minIndex, maxIndex, scheme);
    }

    static percentage(value, min, max, colorScheme) {
        let percent = (value - min) / (max - min);
        percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

        let background = blendColors(colorScheme[0], colorScheme[1], percent);
        let foreground = pickTextColorBasedOnBgColorSimple(background);

        return {
            backgroundColor: background,
            color: foreground
        };
    }
}