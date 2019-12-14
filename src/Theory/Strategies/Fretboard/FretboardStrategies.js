import { ColorStrategies } from "../ColorStrategies";
import { LabelStrategies } from "../LabelStrategies";
import { ColorTools, COLORS } from "../ColorTools";

export const DEFAULT_FRETBOARD_COLOR_SCHEMES = {
    stringNumber: [
        COLORS.White,
        COLORS.Black
    ],
    fretNumber: [
        COLORS.White,
        COLORS.Black
    ]
};

export class FretboardColorStrategies extends ColorStrategies {
    static stringNumber(note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.stringNumber) {
        return ColorTools.continuous(viewerData.stringData.number, 1, viewerData.numStrings, scheme);
    }
    static fretNumber(note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.fretNumber) {
        return ColorTools.continuous(viewerData.fretData.number, viewerData.fretLow, viewerData.fretHigh, scheme);
    }
}

export class FretboardLabelStrategies extends LabelStrategies {
    static stringNumber(note, viewerData) {
        return viewerData.stringData.number;
    }
    static fretNumber(note, viewerData) {
        return viewerData.fretData.number;
    }
}