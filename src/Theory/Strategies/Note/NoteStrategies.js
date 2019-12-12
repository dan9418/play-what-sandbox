import { Utils } from '../../Utils';
import { FunctionalNote } from '../../Classes/FunctionalNote';
import { NonfunctionalNote } from '../../Classes/NonfunctionalNote';

export class NoteStrategies {
    static getIntervalByPitchClass(keyCenter, intervals, pitchClass) {
        return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
    }

    static getIntervalByNoteIndex(keyCenter, intervals, noteIndex) {
        return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
    }

    static getNoteByPitchClass(keyCenter, concept, noteIndex) {
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

    static getNoteByNoteIndex(keyCenter, concept, noteIndex) {
        let interval = NoteStrategies.getIntervalByNoteIndex(keyCenter, concept.intervals, noteIndex, true);
        if (interval === null) {
            return new NonfunctionalNote(noteIndex);
        }

        return new FunctionalNote(keyCenter, interval);
    }

    static getNoteAt(keyCenter, concept, noteIndex, filterOctave = true) {
        return filterOctave ?
            NoteStrategies.getNoteByNoteIndex(keyCenter, concept, noteIndex) :
            NoteStrategies.getNoteByPitchClass(keyCenter, concept, noteIndex);
    }
}