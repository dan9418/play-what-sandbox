import { Utils } from "../Utils";
import { Note } from "./Note";

export class Concept {
    constructor(keyCenter, intervals) {
        this.keyCenter = keyCenter;
        this.intervals = intervals;
    }

    // Interval Getters

    _getIntervalByPitchClass(pitchClass) {
        return this.intervals.find(interval => interval.matchesPitchClassFromKeyCenter(this.keyCenter, pitchClass)) || null;
    }

    _getIntervalByNoteIndex(noteIndex) {
        return this.intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(this.keyCenter, noteIndex)) || null;
    }

    _getIntervalAt(noteIndex, filterOctave = true) {
        if (filterOctave) {
            return this._getIntervalByNoteIndex(noteIndex);
        }
        else {
            let pitchClass = Utils.modulo(noteIndex, 12);
            return this._getIntervalByPitchClass(pitchClass);
        }
    }

    // Note getters

    getNoteAt(noteIndex, filterOctave = true) {
        // 1) Check if an interval exists at this noteIndex
        let interval = this._getIntervalAt(noteIndex, filterOctave);
        if (interval === null) {
            return null;
        }
        // 2) Adjust keyCenter, if needed
        let relativeKeyCenter = filterOctave ? this.keyCenter : {
            ...this.keyCenter,
            octave: Note.getOctaveByNoteIndex(noteIndex - interval.semitones)
        };
        // 3) Generate a note with appropriate keyCenter and interval
        return new Note(relativeKeyCenter, interval);
    }

    // Interval Operations

    chordInversion(inversion) {
        for (let i = 0; i < inversion; i++) {
            let shifted = this.intervals.shift();
            shifted.octaveOffset = shifted.octaveOffset + 1;
            this.intervals.push(shifted);
        }
        // TODO reverse inversions
    }

    reverse() {
        this.intervals.reverse();
    }

    /*getRomanNumeral(degree) {
        if(this.intervals.length !== 7) {
            return null;
        }
        let validDegrees = [
            degree % 7,
            Utils.moduloSum(degree, 3, 7, 1),
            Utils.moduloSum(degree, 5, 7, 1)
        ];
        let newIntervals = this.intervals.filter(interval => validDegrees.includes(interval.degree))
        return new Concept(this.keyCenter, newIntervals);
    }*/
}