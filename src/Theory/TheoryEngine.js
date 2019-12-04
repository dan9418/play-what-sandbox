import { TONIC, CALIBRATION_NOTE, CALIBRATION_CONSTANT, ACCIDENTAL, SCALE, DEFAULT_KEY_CENTER } from "./TheoryConstants";
import { Utils } from "./Utils";

export class TheoryEngine {

    static tryGetNoteName = (tonic = TONIC.C, accidental = ACCIDENTAL.Natural, interval) => {
        let noteDegree = TheoryEngine.getNoteDegree(tonic, interval);
        let pitchClass = TheoryEngine.getPitchClass(tonic, accidental, interval);
        let accidentalOffset = TheoryEngine.getAccidentalOffset(noteDegree, pitchClass, accidental);
        return TheoryEngine.getNoteName(noteDegree, accidentalOffset);
    }

    static tryGetIntervalAtIndex = (noteIndex, keyCenter = DEFAULT_KEY_CENTER, concept = SCALE.Chromatic) => {
        return concept.intervals.find((i) => i.semitones === Utils.modulo(noteIndex, 12));
    }

    /*static applyChordInversion = (intervals: Interval[], inversion): void => {
        // Shift octaves
        for (let i = 0; i < inversion; i++) {
            intervals[i].octaveOffset = intervals[i].octaveOffset + 1;
        }
        // Shift order
        inversion -= intervals.length * Math.floor(inversion / intervals.length);
        intervals.push.apply(intervals, intervals.splice(0, inversion));
    }*/

    /*static parseIntervals = (tonic: Tonic, accidental: Accidental, octave, intervals: Interval[], chordInversion = 0): Note[] => {

        // Copy intervals
        let parsedIntervals = [];
        for (let i = 0; i < intervals.length; i++) {
            parsedIntervals.push(Object.assign({ octaveOffset: 0 }, intervals[i]));
        }

        // Apply chord inversion, if specified
        if (chordInversion) {
            let inversion = chordInversion % intervals.length;
            TheoryEngine.applyChordInversion(parsedIntervals, inversion);
        }

        let notes = [];
        for (let i = 0; i < parsedIntervals.length; i++) {
            let note = TheoryEngine.getFunctionalNote(tonic, accidental, octave, parsedIntervals[i]);
            notes.push(note);
        }

        return notes;
    }*/

    /*static getFunctionalNote = (tonic: Tonic, accidental: Accidental, tonicOctave, interval: Interval): Note => {
        // Calculate functional properties
        let noteDegree = TheoryEngine.getNoteDegree(tonic, interval);
        let pitchClass = TheoryEngine.getPitchClass(tonic, accidental, interval);
        let accidentalOffset = TheoryEngine.getAccidentalOffset(noteDegree, pitchClass, accidental);
        let name = TheoryEngine.getNoteName(noteDegree, accidentalOffset);

        // Calculate physical properties
        let noteOctave = TheoryEngine.getFunctionalNoteOctave(tonic, accidental, tonicOctave, interval);
        let noteIndex = TheoryEngine.getNoteIndex(noteOctave, pitchClass);
        let frequency = TheoryEngine.getFrequency(noteIndex);

        return {
            interval: interval,
            pitchClass: pitchClass,
            name: name,
            noteOctave: noteOctave,
            noteIndex: noteIndex,
            frequency: frequency
        }

    }*/

    /*static getNonfunctionalNote = (noteIndex): Note => {
        return {
            noteIndex: noteIndex,
            noteOctave: TheoryEngine.getPhysicalNoteOctave(noteIndex),
            pitchClass: TheoryEngine.getRelativePotision(noteIndex),
            frequency: TheoryEngine.getFrequency(noteIndex),
            interval: null,
            name: '',
        }
    }*/

    static getNoteDegree = (tonic, interval) => {
        return Utils.moduloSum(tonic.degreeInC, interval.degree, 7, 1);
    }

    static getPitchClass = (tonic, accidental, interval) => {
        return Utils.moduloSum(tonic.pitchClass + accidental.offset, interval.semitones, 12, 0);
    }

    static getFunctionalNoteOctave = (tonic, accidental, tonicOctave, interval) => {
        return tonicOctave + Math.floor((tonic.pitchClass + accidental.offset + interval.semitones) / 12);
    }

    static getPhysicalNoteOctave = (noteIndex) => {
        return 4 + Math.floor(noteIndex / 12);
    }

    static getNoteIndex = (noteOctave, pitchClass) => {
        return (noteOctave - 4) * 12 + pitchClass;
    }

    static getAccidentalOffset = (noteDegree, pitchClass, accidental) => {
        let offset = pitchClass - TheoryEngine.getTonicByDegree(noteDegree).pitchClass;
        if (offset < 0 && accidental.offset > 0) offset = offset + 12;
        else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
        return offset;
    }

    static getNoteName = (noteDegree, accidentalOffset) => {
        return TheoryEngine.getTonicByDegree(noteDegree).name + TheoryEngine.getAccidentalString(accidentalOffset);
    }

    static getTonicByDegree = (degree) => {
        return Object.values(TONIC)[degree - 1];
    }

    static getRelativePotision = (noteIndex) => {
        if (noteIndex >= 0)
            return noteIndex % 12;
        else
            return 12 + (noteIndex % 12);
    }

    static getFrequency = (noteIndex) => {
        return CALIBRATION_NOTE.frequency * Math.pow(CALIBRATION_CONSTANT, noteIndex - CALIBRATION_NOTE.noteIndex);
    }

    static getAccidentalString = (offset) => {
        switch (offset) {
            case 0:
                return ''
            case 1:
                return '#';
            case 2:
                return 'x';
            case -1:
                return 'b';
            case -2:
                return 'bb';
            default:
                return (offset < 0) ? -offset + 'b' : offset + '#';
        }
    };
}
