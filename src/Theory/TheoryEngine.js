import { TONIC } from './Constants/Enums';
import { CALIBRATION_NOTE, CALIBRATION_CONSTANT } from './Constants/Presets';
import { Utils } from "./Utils";

export class TheoryEngine {

    static getNoteDegree(tonic, interval) {
        return Utils.moduloSum(tonic.degreeInC, interval.degree, 7, 1);
    }

    static getPitchClass(tonic, accidental, interval) {
        return Utils.moduloSum(tonic.pitchClass + accidental.offset, interval.semitones, 12, 0);
    }

    static getFunctionalNoteOctave(tonic, accidental, tonicOctave, interval) {
        return tonicOctave + Math.floor((tonic.pitchClass + accidental.offset + interval.semitones) / 12);
    }

    static getPhysicalNoteOctave(noteIndex) {
        return 4 + Math.floor(noteIndex / 12);
    }

    static getNoteIndex(noteOctave, pitchClass) {
        return (noteOctave - 4) * 12 + pitchClass;
    }

    static getAccidentalOffset(noteDegree, pitchClass, accidental) {
        let offset = pitchClass - TheoryEngine.getTonicByDegree(noteDegree).pitchClass;
        if (offset < 0 && accidental.offset > 0) offset = offset + 12;
        else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
        return offset;
    }

    static getNoteName(noteDegree, accidentalOffset) {
        return TheoryEngine.getTonicByDegree(noteDegree).name + TheoryEngine.getAccidentalString(accidentalOffset);
    }

    static getTonicByDegree(degree) {
        return Object.values(TONIC)[degree - 1];
    }

    static getFrequency(noteIndex) {
        return CALIBRATION_NOTE.frequency * Math.pow(CALIBRATION_CONSTANT, noteIndex - CALIBRATION_NOTE.noteIndex);
    }

    static getAccidentalString(offset) {
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
