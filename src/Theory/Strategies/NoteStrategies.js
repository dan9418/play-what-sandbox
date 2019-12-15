import { Utils } from '../Utils';
import { FunctionalNote } from '../Classes/FunctionalNote';
import { NonfunctionalNote } from '../Classes/NonfunctionalNote';

export class NoteStrategies {
    // Private

    static getIntervalByPitchClass(keyCenter, intervals, pitchClass) {
        return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
    }

    static getIntervalByNoteIndex(keyCenter, intervals, noteIndex) {
        return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
    }

    // Public

    static getNoteByPitchClass(noteIndex, keyCenter, concept) {
        let pitchClass = Utils.modulo(noteIndex, 12);
        let interval = NoteStrategies.getIntervalByPitchClass(keyCenter, concept.intervals, pitchClass);
        if (interval === null) {
            return new NonfunctionalNote(noteIndex);
        }

        let relativeKeyCenter = {
            ...keyCenter,
            octave: NonfunctionalNote.getOctave(noteIndex - interval.semitones)
        };

        return new FunctionalNote(relativeKeyCenter, interval);
    }

    static getNoteByNoteIndex(noteIndex, keyCenter, concept) {
        let interval = NoteStrategies.getIntervalByNoteIndex(keyCenter, concept.intervals, noteIndex, true);
        if (interval === null) {
            return new NonfunctionalNote(noteIndex);
        }

        return new FunctionalNote(keyCenter, interval);
    }

    static getNoteAt(noteIndex, keyCenter, concept, filterOctave = true) {
        return filterOctave ?
            NoteStrategies.getNoteByNoteIndex(noteIndex, keyCenter, concept) :
            NoteStrategies.getNoteByPitchClass(noteIndex, keyCenter, concept);
    }
}