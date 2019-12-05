import { Utils } from "../Utils";
import { Note } from './Note';

export class Interval {
    constructor(degree, semitones, id, name, ascending = true, octaveOffset = 0) {
        this.id = id;
        this.name = name;
        this.degree = degree;
        this.semitones = semitones;
        this.ascending = ascending;
        this.octaveOffset = octaveOffset;
    }

    matchesPitchClassFromKeyCenter(keyCenter, pitchClass) {
        return Utils.modulo(keyCenter.getRootIndex(true) + this.semitones, 12) === pitchClass;
    }

    matchesNoteIndexFromKeyCenter(keyCenter, noteIndex) {
        return keyCenter.getRootIndex() + this.octaveOffset * 12 + this.semitones === noteIndex;
    }

    getDegreeFromKeyCenter(keyCenter) {
        return Utils.moduloSum(keyCenter.tonic.degreeInC, this.degree, 7, 1);
    }

    getPitchClassFromKeyCenter(keyCenter) {
        return Utils.moduloSum(keyCenter.tonic.pitchClass + keyCenter.accidental.offset, this.semitones, 12, 0);
    }

    getNoteFromKeyCenter(keyCenter) {
        return new Note(keyCenter, this);
    }
}