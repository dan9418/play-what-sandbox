import { CALIBRATION_NOTE, CALIBRATION_CONSTANT } from '../Constants/Tuning';
import { TONIC } from '../Constants/Enums';
import { Utils } from '../Utils';

export class Note {
    constructor(keyCenter, interval) {
        this.keyCenter = keyCenter;
        this.interval = interval;
        this.evaluate();
    }

    evaluate() {
        this.noteDegree = Note.getDegree(this.keyCenter, this.interval);
        this.pitchClass = Note.getPitchClass(this.keyCenter, this.interval);
        this.name = Note.getName(this.noteDegree, this.pitchClass, this.keyCenter.accidental);
        this.octave = Note.getOctave(this.keyCenter, this.interval);
        this.noteIndex = Note.getNoteIndex(this.octave, this.pitchClass);
        this.frequency = Note.getFrequency(this.noteIndex);
    }

    static getDegree(keyCenter, interval) {
        return Utils.moduloSum(keyCenter.tonic.degreeInC, interval.degree, 7, 1);
    }

    static getPitchClass(keyCenter, interval) {
        return Utils.moduloSum(keyCenter.tonic.pitchClass + keyCenter.accidental.offset, interval.semitones, 12, 0);
    }

    static getName(noteDegree, pitchClass, accidental) {
        let spelling = Note._getTonicByDegree(noteDegree);
        // Get accidental offset
        let offset = pitchClass - spelling.pitchClass;
        if (offset < 0 && accidental.offset > 0) offset = offset + 12;
        else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
        // Combine tonic name with accidental
        return spelling.name + Note._getAccidentalString(offset);
    }

    static _getTonicByDegree(noteDegree) {
        return Object.values(TONIC)[noteDegree - 1];
    }

    static _getAccidentalString(offset) {
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
    }

    static getOctave(keyCenter, interval) {
        return keyCenter.octave + Math.floor((keyCenter.tonic.pitchClass + keyCenter.accidental.offset + interval.semitones) / 12);
    }

    static getOctaveByNoteIndex(noteIndex) {
        return 4 + Math.floor(noteIndex / 12);
    }

    static getNoteIndex(noteOctave, pitchClass) {
        return (noteOctave - 4) * 12 + pitchClass;
    }

    static getFrequency(noteIndex) {
        return CALIBRATION_NOTE.frequency * Math.pow(CALIBRATION_CONSTANT, noteIndex - CALIBRATION_NOTE.noteIndex);
    }

    static getNonfunctionalNote(noteIndex) {
        return {
            noteDegree: 0,
            pitchClass: Utils.modulo(noteIndex, 12),
            name: '',
            octave: Math.floor(noteIndex / 12),
            noteIndex: noteIndex,
            frequency: Note.getFrequency(noteIndex)
        };
    }
}