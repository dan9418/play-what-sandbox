import { INTERVAL, Utils, TheoryEngine, LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';

export class Concept {
    constructor(keyCenter, intervals) {
        this.keyCenter = keyCenter;
        this.intervals = intervals;
    }

    // keyCenter Helpers

    _getOctaveRoot() {
        return (this.keyCenter.octave - 4) * 12;
    }

    _getKeyRoot(relative = false) {
        let keyRootRelative = this.keyCenter.tonic.pitchClass + this.keyCenter.accidental.offset;
        return relative ? keyRootRelative : this._getOctaveRoot() + keyRootRelative;
    }

    // interval Helpers

    _intervalMatchesPitchClass(interval, pitchClass) {
        return Utils.modulo(this._getKeyRoot(true) + interval.semitones, 12) === pitchClass;
    }

    _getIntervalByPitchClass(pitchClass) {
        return this.intervals.find(interval => this._intervalMatchesPitchClass(interval, pitchClass)) || null;
    }

    _intervalMatchesNoteIndex(interval, noteIndex) {
        return this._getKeyRoot() + interval.semitones === noteIndex;
    }

    _getIntervalByNoteIndex(noteIndex) {
        return this.intervals.find(interval => this._intervalMatchesNoteIndex(interval, noteIndex)) || null;
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

    // Note Helpers

    _parseInterval(keyCenter, interval) {
        // Calculate functional properties
        let noteDegree = TheoryEngine.getNoteDegree(keyCenter.tonic, interval);
        let pitchClass = TheoryEngine.getPitchClass(keyCenter.tonic, keyCenter.accidental, interval);
        let accidentalOffset = TheoryEngine.getAccidentalOffset(noteDegree, pitchClass, keyCenter.accidental);
        let name = TheoryEngine.getNoteName(noteDegree, accidentalOffset);

        // Calculate physical properties
        let noteOctave = TheoryEngine.getFunctionalNoteOctave(keyCenter.tonic, keyCenter.accidental, keyCenter.octave, interval);
        let noteIndex = TheoryEngine.getNoteIndex(noteOctave, pitchClass);
        let frequency = TheoryEngine.getFrequency(noteIndex);

        return {
            interval: interval,
            pitchClass: pitchClass,
            name: name,
            noteOctave: noteOctave,
            noteIndex: noteIndex,
            frequency: frequency
        };
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
        return this._parseInterval(relativeKeyCenter, interval);
    }

    chordInversion(inversion) {
        
    }

    getRomanNumeral(degree) {
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
    }
}