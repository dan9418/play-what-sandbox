import { SoundUtils } from '../Utils/SoundUtils';
import { CommonUtils } from '../Utils/CommonUtils';

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

    copy() {
        return new NonfunctionalNote(this.noteIndex);
    }

    static getPitchClass(noteIndex) {
        return CommonUtils.modulo(noteIndex, 12);
    }

    static getOctave(noteIndex) {
        return 4 + Math.floor(noteIndex / 12);
    }

    static getFrequency(noteIndex) {
        return SoundUtils.CALIBRATION_NOTE.frequency * Math.pow(SoundUtils.CALIBRATION_CONSTANT, noteIndex - SoundUtils.CALIBRATION_NOTE.noteIndex);
    }
}