import { Utils } from "../Utils";
import { Note } from "./Note";
import { TONIC, ACCIDENTAL } from "../Constants/Enums";

export class Concept {
    constructor(keyCenter, id = '', name = '', intervals = []) {
        this.keyCenter = keyCenter || { tonic: TONIC.C, accidental: ACCIDENTAL.Natural, octave: 4 };
        this.intervals = intervals;
        this.id = id;
        this.name = name;
    }

    // Interval Getters

    getIntervalByPitchClass(pitchClass) {
        return this.intervals.find(interval => interval.matchesPitchClassFromKeyCenter(this.keyCenter, pitchClass)) || null;
    }

    getIntervalByNoteIndex(noteIndex) {
        return this.intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(this.keyCenter, noteIndex)) || null;
    }

    // Note Getters

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