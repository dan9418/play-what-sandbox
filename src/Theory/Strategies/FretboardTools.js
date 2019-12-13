import { ColorStrategies } from "./ColorStrategies";

export const FretboardTools = {
    color: {
        none = (note, viewerData) => ColorStrategies.none(),
        binary = (note, viewerData) => ColorStrategies.binary(),
        degree = (note, viewerData) => ColorStrategies.degree(),
        pitchClass = (note, viewerData) => ColorStrategies.pitchClass(),
        octave = (note, viewerData) => {
            return ColorStrategies.octave(note, viewerData.fretboard.minNote, viewerData.fretboard.maxNote);
        },
        frequency = (note, viewerData) => {
            return ColorStrategies.frequency(note, viewerData.fretboard.minNote, viewerData.fretboard.maxNote);
        },
        noteIndex = (note, viewerData) => {
            return ColorStrategies.noteIndex(note, viewerData.fretboard.minNote, viewerData.fretboard.maxNote);
        }
    },
    label: {

    }

} 