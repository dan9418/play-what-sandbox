import { CALIBRATION_NOTE, CALIBRATION_CONSTANT } from '../Constants/Tuning';
import { Utils } from '../Utils';

export class NonfunctionalNote {
    constructor(noteIndex) {
        this.keyCenter = null;
        this.interval = null;
        this.noteDegree = 0;
        this.pitchClass = NonfunctionalNote.getPitchClass(noteIndex);
        this.name = '';
        this.octave = NonfunctionalNote.getOctave(noteIndex);
        this.noteIndex = noteIndex;
        this.frequency = NonfunctionalNote.getFrequency(noteIndex);
    }

    static getPitchClass(noteIndex) {
        return Utils.modulo(noteIndex, 12);
    }

    static getOctave(noteIndex) {
        return 4 + Math.floor(noteIndex / 12);
    }

    static getFrequency(noteIndex) {
        return CALIBRATION_NOTE.frequency * Math.pow(CALIBRATION_CONSTANT, noteIndex - CALIBRATION_NOTE.noteIndex);
    }
}