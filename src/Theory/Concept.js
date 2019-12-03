import { INTERVAL, Utils, TheoryEngine, LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';

export class Concept {
    constructor(keyCenter, intervals) {
        this.keyCenter = keyCenter;
        this.intervals = intervals;
        this.inversion = 0;
    }

    _getIntervalAt(noteIndex, filterOctave = true) {
        let keyRootRelative = this.keyCenter.tonic.pitchClass + this.keyCenter.accidental.offset;
        let index = -1;
        if (filterOctave) {
            let keyRootAbsolute = (this.keyCenter.octave - 4) * 12;
            index = this.intervals.findIndex(interval => keyRootAbsolute + keyRootRelative + interval.semitones === noteIndex);
        }
        else {
            let pitchClass = Utils.modulo(noteIndex, 12);
            index = this.intervals.findIndex(interval => Utils.modulo(keyRootRelative + interval.semitones, 12) === pitchClass);
        }
        return {
            interval: this.intervals[index],
            index: index
        }
    }

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

    getNoteAt(noteIndex) {
        let { interval, index } = this._getIntervalAt(noteIndex);
        if (index < 0) {
            return null;
        }
        return this._parseInterval(this.keyCenter, interval);
    }

    getEquivalentNoteAt(noteIndex) {
        let { interval, index } = this._getIntervalAt(noteIndex, false);
        if (index < 0) {
            return null;
        }
        // Calculate the octave from which this interval originated
        let relativeKeyCenter = {
            ...this.keyCenter,
            octave: TheoryEngine.getPhysicalNoteOctave(noteIndex - interval.semitones)
        };
        return this._parseInterval(relativeKeyCenter, interval);
    }

    chordInversion(inversion) {
        this.inversion = inversion;
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