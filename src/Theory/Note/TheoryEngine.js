import { Note } from '../../Classes/Note';
import { Utils } from '../../Utils';

export class TheoryEngine {
    static getIntervalByPitchClass(keyCenter, intervals, pitchClass) {
        return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
    }

    static getIntervalByNoteIndex(keyCenter, intervals, noteIndex) {
        return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
    }

    static getNoteByPitchClass(keyCenter, concept, noteIndex) {
        let pitchClass = Utils.modulo(noteIndex, 12);
        let interval = TheoryEngine.getIntervalByPitchClass(keyCenter, concept.intervals, pitchClass);
        if (interval === null) {
            return null;
        }

        let relativeKeyCenter = {
            ...keyCenter,
            octave: Note.getOctaveByNoteIndex(noteIndex - interval.semitones)
        };

        return new Note(relativeKeyCenter, interval);
    }

    static getNoteByNoteIndex(keyCenter, concept, noteIndex) {
        let interval = TheoryEngine.getIntervalByNoteIndex(keyCenter, concept.intervals, noteIndex, true);
        if (interval === null) {
            return null;
        }

        return new Note(keyCenter, interval);
    }

    static getNoteAt(keyCenter, concept, noteIndex, filterOctave = true) {
        return filterOctave ?
            TheoryEngine.getNoteByNoteIndex(keyCenter, concept, noteIndex) :
            TheoryEngine.getNoteByPitchClass(keyCenter, concept, noteIndex);
    }
}