import * as React from "react";
import { INTERVAL, Utils, TheoryEngine, LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { useState } from "react";
import { KeyCenterSelector } from "./KeyCenterSelector";
import { ConceptSelector } from "./ConceptSelector";
import { ColorStrategySelector } from "./ColorStrategySelector";
import { LabelStrategySelector } from "./LabelStrategySelector";

const DEFAULT_KEY_CENTER = {
    tonic: TONIC.E,
    accidental: ACCIDENTAL.Natural,
    octave: 3
};
const DEFAULT_CONCEPT = {
    intervals: CHORD.Maj.intervals,
    //intervals: CHORD.Maj13.intervals,
    //intervals: SCALE.Chromatic.intervals,
    chordInversion: 0
};

const DEFAULT_COLOR_STRATEGY = () => COLOR_STRATEGIES.Degree;
const DEFAULT_LABEL_STRATEGY = () => LABEL_STRATEGIES.Interval;

const GUITAR_VOICING = {
    BarreE: [1, 5, 3, 1, 5, 1],
    BarreE7: [1, 5, 3, 7, 5, 1],
    BarreA: [5, 3, 1, 5, 1, null],
    BarreA7: [5, 3, 7, 5, 1, null]
}

// GET

function getNote(noteIndex, concept = DEFAULT_CONCEPT, keyCenter = DEFAULT_KEY_CENTER) {
    // Get correct interval from concept, if applicable
    let interval = getIntervalByPitchClass(keyCenter, concept.intervals, Utils.modulo(noteIndex, 12));
    if (!interval) {
        return null;
    }
    // Calculate the octave from which this interval originated
    let relativeKeyCenter = {
        ...keyCenter,
        octave: TheoryEngine.getPhysicalNoteOctave(noteIndex - interval.semitones)
    };
    // Apply interval to keyCenter
    return parseInterval(relativeKeyCenter, interval);
}

function getIntervalByPitchClass(keyCenter, intervals, pitchClass) {
    let keyRootRelative = keyCenter.tonic.pitchClass + keyCenter.accidental.offset;
    return intervals.find(interval => Utils.modulo(keyRootRelative + interval.semitones, 12) === pitchClass);
}

function parseInterval(keyCenter, interval) {
    // Calculate functional properties
    let noteDegree = TheoryEngine.getNoteDegree(keyCenter.tonic, interval);
    let pitchClass = TheoryEngine.getPitchClass(keyCenter.tonic, keyCenter.accidental, interval);
    let accidentalOffset = TheoryEngine.getAccidentalOffset(noteDegree, pitchClass, keyCenter.accidental);
    let name = TheoryEngine.getNoteName(noteDegree, accidentalOffset);

    // Calculate physical properties
    let noteOctave = TheoryEngine.getFunctionalNoteOctave(keyCenter.tonic, keyCenter.accidental, keyCenter.octave, interval);
    let noteIndex = TheoryEngine.getNoteIndex(noteOctave, pitchClass);
    let frequency = TheoryEngine.getFrequency(noteIndex);

    return {
        interval: interval,
        pitchClass: pitchClass,
        name: name,
        noteOctave: noteOctave,
        noteIndex: noteIndex,
        frequency: frequency
    };
}

// FILTER

function noteFilter(noteProfile, viewerProfile, fretProfile, concept = DEFAULT_CONCEPT, keyCenter = DEFAULT_KEY_CENTER) {
    // If no note, nothing to filter
    if (!noteProfile || !noteProfile.interval) return false;

    // noteIndex where key center begins
    let keyRootAbsolute = (keyCenter.octave - 4) * 12 + keyCenter.tonic.pitchClass + keyCenter.accidental.offset;
    // Distance from key start to noteIndex
    let diff = Math.abs(noteProfile.noteIndex - keyRootAbsolute);
    // Determine which octave intervals belongs and if it exists there
    return filterOctave(diff, noteProfile.interval);

    // Guitar voicings
    /*let triad = guitarVoicing(fretProfile.stringNumber, noteProfile.interval.degree, GUITAR_VOICING.BarreA);
    let sev = guitarVoicing(fretProfile.stringNumber, noteProfile.interval.degree, GUITAR_VOICING.BarreA7);
    return triad;*/
}

// Axxx (1-15)
function filterOctave(delta, interval) {
    return delta < 12;
}

// Axxx (1-17)
function filterExtended(delta, interval) {
    return interval.degree < 8 ? delta < 12 : false;
}

// ABxx
function filterExtendedOctave(delta, interval) {
    return interval.degree < 8 ? delta < 12 : delta >= 12 && delta < 24;
}

// ABAB
function allExtendedOctaves(delta, interval) {
    return interval.degree < 8 ? Utils.modulo(delta, 24) < 12 : Utils.modulo(delta, 24) >= 12;
}

function guitarVoicing(stringNumber, degree, degrees) {
    return degrees[stringNumber - 1] === degree;
}

export function ViewDriver(props) {
    const [keyCenter, setKeyCenter] = useState(DEFAULT_KEY_CENTER);
    const [concept, setConcept] = useState(DEFAULT_CONCEPT);
    const [labelStrategy, setLabelStrategy] = useState(DEFAULT_LABEL_STRATEGY);
    const [colorStrategy, setColorStrategy] = useState(DEFAULT_COLOR_STRATEGY);

    let Viewer = props.viewer;

    return (
        <div className='play-what-viewer'>
            <KeyCenterSelector keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
            <ConceptSelector concept={concept} setConcept={setConcept} />
            <LabelStrategySelector labelStrategy={labelStrategy} setLabelStrategy={setLabelStrategy} />
            <ColorStrategySelector colorStrategy={colorStrategy} setColorStrategy={setColorStrategy} />
            <Viewer
                labelStrategy={labelStrategy}
                colorStrategy={colorStrategy}
                noteStrategy={(noteIndex) => getNote(noteIndex, concept, keyCenter)}
                noteFilter={(noteProfile, viewerProfile, fretProfile) => noteFilter(noteProfile, viewerProfile, fretProfile, concept, keyCenter)}
            />
        </div>
    );
}

/*function intervalMatchesNoteIndex(noteIndex, keyCenter, interval) {
    // noteIndex of interval applied to keyCenter
    let num = keyCenter.tonic.pitchClass + keyCenter.accidental.offset + interval.semitones;
    return Utils.modulo(num, 12) === Utils.modulo(noteIndex, 12);
    return filterOctave ?
        num === noteIndex :
        extended ?
            Utils.modulo(num, 24) === Utils.modulo(noteIndex, 24) :
            Utils.modulo(num, 12) === Utils.modulo(noteIndex, 12);
}*/