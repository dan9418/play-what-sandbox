import { Strategies, Utils } from "../../../play-what/index";

export const DEFAULT_FRETBOARD_COLOR_SCHEMES = {
    stringNumber: [
        Utils.Color.COLORS.White,
        Utils.Color.COLORS.Black
    ],
    fretNumber: [
        Utils.Color.COLORS.White,
        Utils.Color.COLORS.Black
    ]
};

export class FretboardColorStrategies extends Strategies.Color {
    static stringNumber(note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.stringNumber) {
        return ColorUtils.continuous(viewerData.stringData.number, 1, viewerData.numStrings, scheme);
    }
    static fretNumber(note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.fretNumber) {
        return ColorUtils.continuous(viewerData.fretData.number, viewerData.fretLow, viewerData.fretHigh, scheme);
    }
}

export class FretboardLabelStrategies extends Strategies.Label {
    static stringNumber(note, viewerData) {
        return viewerData.stringData.number;
    }
    static fretNumber(note, viewerData) {
        return viewerData.fretData.number;
    }
}

export class FretboardFilterStrategies extends Strategies.Filter {
    static voicing(note, viewerData, voicing = []) {
        // TODO
    }
}