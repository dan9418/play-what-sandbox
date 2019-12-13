import { DEFAULT_COLOR_PROFILE, COLORS } from "./ColorConfig";
import * as Color from "color";

export class ColorTools {

    static getColorStyles(background, foreground) {
        if (!background) {
            return {};
        }
        let bg = Color(background);
        return {
            backgroundColor: bg.hsl().string(),
            color: foreground || (bg.isDark() ? COLORS.Black : COLORS.White)
        }
    }

    static discrete(value, colorScheme) {
        let background = colorScheme[value];

        return ColorTools.getColorStyles(background);
    }

    static continuous(value, min, max, colorScheme) {
        let percent = (value - min) / (max - min);
        percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

        let initialColor = Color(colorScheme[0]);
        let finalColor = Color(colorScheme[1]);
        let background = initialColor.mix(finalColor, percent);

        return ColorTools.getColorStyles(background);
    }
}

export class ColorStrategies {
    static none() {
        return {};
    }

    static binary(note, scheme = DEFAULT_COLOR_PROFILE.binary) {
        return (!note || !note.interval) ? ColorTools.discrete(0, scheme) : ColorTools.discrete(1, scheme);
    }

    static degree(note, scheme = DEFAULT_COLOR_PROFILE.degree) {
        return (!note || !note.interval) ? ColorTools.discrete(0, scheme) : ColorTools.discrete(note.interval.degree, scheme);
    }

    static pitchClass(note, scheme = DEFAULT_COLOR_PROFILE.pitchClass) {
        return ColorTools.discrete(note.pitchClass, scheme);
    }

    static octave(note, minNote, maxNote, scheme = DEFAULT_COLOR_PROFILE.octave) {
        let currentOctave = note.octave;
        let minOctave = minNote.octave;
        let maxOctave = maxNote.octave;

        return ColorTools.continuous(currentOctave, minOctave, maxOctave, scheme);
    }

    static frequency(note, minNote, maxNote, scheme = DEFAULT_COLOR_PROFILE.frequency) {
        let currentFrequency = note.frequency;
        let minFrequency = minNote.frequency;
        let maxFrequency = maxNote.frequency;

        return ColorTools.continuous(currentFrequency, minFrequency, maxFrequency, scheme);
    }

    static noteIndex(note, minNote, maxNote, scheme = DEFAULT_COLOR_PROFILE.noteIndex) {
        let currentIndex = note.noteIndex;
        let minIndex = minNote.noteIndex;
        let maxIndex = maxNote.noteIndex;

        return ColorTools.continuous(currentIndex, minIndex, maxIndex, scheme);
    }
}