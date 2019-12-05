import { TheoryEngine } from '../TheoryEngine';

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

    evaluateFromKeyCenter(keyCenter) {
        // Calculate functional properties
        let noteDegree = TheoryEngine.getNoteDegree(keyCenter.tonic, this);
        let pitchClass = TheoryEngine.getPitchClass(keyCenter.tonic, keyCenter.accidental, this);
        let accidentalOffset = TheoryEngine.getAccidentalOffset(noteDegree, pitchClass, keyCenter.accidental);
        let name = TheoryEngine.getNoteName(noteDegree, accidentalOffset);

        // Calculate physical properties
        let noteOctave = TheoryEngine.getFunctionalNoteOctave(keyCenter.tonic, keyCenter.accidental, keyCenter.octave, this);
        let noteIndex = TheoryEngine.getNoteIndex(noteOctave, pitchClass);
        let frequency = TheoryEngine.getFrequency(noteIndex);

        return {
            interval: this,
            pitchClass: pitchClass,
            name: name,
            noteOctave: noteOctave,
            noteIndex: noteIndex,
            frequency: frequency
        };
    }
}