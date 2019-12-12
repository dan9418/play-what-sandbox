import { DEFAULT_COLOR_PROFILE, getColorStyles } from "./ColorConfig";
import * as Color from "color";

export class ColorStrategies {
    static none() {
        return {};
    }

    static binary(note, scheme = DEFAULT_COLOR_PROFILE.binary) {
        return (!note || !note.interval) ? scheme[0] : scheme[1];
    }

    static degree(note, scheme = DEFAULT_COLOR_PROFILE.degree) {
        if (!note || !note.interval) {
            return scheme[0];
        } else {
            return scheme[note.interval.degree];
        }
    }

    static pitchClass(note, scheme = DEFAULT_COLOR_PROFILE.pitchClass) {
        return scheme[note.pitchClass];
    }

    static octave(note, minNote, maxNote, scheme = DEFAULT_COLOR_PROFILE.octave) {
        let currentOctave = note.octave;
        let minOctave = minNote.octave;
        let maxOctave = maxNote.octave;

        return ColorStrategies.percentage(currentOctave, minOctave, maxOctave, scheme);
    }

    static frequency(note, minNote, maxNote, scheme = DEFAULT_COLOR_PROFILE.frequency) {
        let currentFrequency = note.frequency;
        let minFrequency = minNote.frequency;
        let maxFrequency = maxNote.frequency;

        return ColorStrategies.percentage(currentFrequency, minFrequency, maxFrequency, scheme);
    }

    static noteIndex(note, minNote, maxNote, scheme = DEFAULT_COLOR_PROFILE.noteIndex) {
        let currentIndex = note.noteIndex;
        let minIndex = minNote.noteIndex;
        let maxIndex = maxNote.noteIndex;

        return ColorStrategies.percentage(currentIndex, minIndex, maxIndex, scheme);
    }

    static percentage(value, min, max, colorScheme) {
        let percent = (value - min) / (max - min);
        percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

        let initialColor = Color(colorScheme[0]);
        let finalColor = Color(colorScheme[1]);
        let background = initialColor.mix(finalColor, percent);

        return getColorStyles(background);
    }
}