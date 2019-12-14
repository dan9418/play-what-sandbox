import { ColorStrategies } from "../ColorStrategies";
import { LabelStrategies } from "../LabelStrategies";
import { ColorTools, COLORS } from "../ColorTools";
import { KeyboardKeyType } from "play-what-beta";

export const DEFAULT_KEYBOARD_COLOR_SCHEMES = {
    keyNumber: [
        COLORS.White,
        COLORS.Black
    ],
    keyType: [
        COLORS.Green,
        COLORS.Red
    ]
};

export class KeyboardColorStrategies extends ColorStrategies {
    static keyNumber(note, viewerData, scheme = DEFAULT_KEYBOARD_COLOR_SCHEMES.keyNumber) {
        return ColorTools.continuous(note.noteIndex - viewerData.keyLow, viewerData.minNote.noteIndex - viewerData.keyLow, viewerData.maxNote.noteIndex - viewerData.keyLow, scheme);
    }
    static keyType(note, viewerData, scheme = DEFAULT_KEYBOARD_COLOR_SCHEMES.keyType) {
        return ColorTools.discrete(viewerData.keyData.type === KeyboardKeyType.White ? 0 : 1, scheme);
    }
}

export class KeyboardLabelStrategies extends LabelStrategies {
    static keyNumber(note, viewerData) {
        return note.noteIndex - viewerData.keyLow;
    }
    static keyType(note, viewerData) {
        return viewerData.keyData.type === KeyboardKeyType.White ? 'W' : 'B';
    }
}