import { ColorStrategies } from "../Color/ColorStrategies";

export class FretboardColorStrategies extends ColorStrategies {
    static octave(note, viewerData) {
        return super.octave(note, viewerData.fretboard.minNote, viewerData.fretboard.maxNote);
    }
} 