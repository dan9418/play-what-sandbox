import { Utils } from "../Utils";
import { Note } from "./Note";

export class Concept {
    constructor(keyCenter, intervals) {
        this.keyCenter = keyCenter;
        this.intervals = intervals;
    }

    // Interval Getters

    getIntervalByPitchClass(pitchClass) {
        return this.intervals.find(interval => interval.matchesPitchClassFromKeyCenter(this.keyCenter, pitchClass)) || null;
    }

    getIntervalByNoteIndex(noteIndex) {
        return this.intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(this.keyCenter, noteIndex)) || null;
    }

    // Note getters

    getNoteByPitchClass(noteIndex) {
        let pitchClass = Utils.modulo(noteIndex, 12);
        let interval = this.getIntervalByPitchClass(pitchClass);
        if (interval === null) {
            return null;
        }

        let relativeKeyCenter = {
            ...this.keyCenter,
            octave: Note.getOctaveByNoteIndex(noteIndex - interval.semitones)
        };

        return new Note(relativeKeyCenter, interval);
    }

    getNoteByNoteIndex(noteIndex) {
        let interval = this.getIntervalByNoteIndex(noteIndex, true);
        if (interval === null) {
            return null;
        }

        return new Note(this.keyCenter, interval);
    }

    getNoteAt(noteIndex, filterOctave = true) {
        return filterOctave ? this.getNoteByNoteIndex(noteIndex) : this.getNoteByPitchClass(noteIndex);
    }
}