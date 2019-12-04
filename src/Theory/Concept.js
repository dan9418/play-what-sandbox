import { INTERVAL, Utils, TheoryEngine, LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { Interval } from './Interval';

export class Concept {
    constructor(keyCenter, intervals) {
        this.keyCenter = keyCenter;
        this.intervals = intervals.map(i => new Interval(i));
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

    getNoteAt(noteIndex, filterOctave = true) {
        let interval = this._getIntervalAt(noteIndex, filterOctave);
        if (interval === null) {
            return null;
        }
        let relativeKeyCenter = filterOctave ? this.keyCenter : {
            ...this.keyCenter,
            octave: TheoryEngine.getPhysicalNoteOctave(noteIndex - interval.semitones)
        };
        return interval.evaluateFromKeyCenter(relativeKeyCenter);
    }

    // Interal Operations

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