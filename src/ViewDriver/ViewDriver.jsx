import * as React from 'react';
import './ViewDriver.css';
import { INTERVAL, Utils, TheoryEngine, LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { Concept } from '../Theory/Concept';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setKeyCenterOctave, setKeyCenterTonic, setKeyCenterAccidental, setIntervals } from '../Redux/Actions/actions';
import { KeyCenterInput } from '../Inputs/KeyCenterInput/KeyCenterInput';
import { IntervalsInput } from '../Inputs/IntervalsInput/IntervalsInput';

const DEFAULT_KEY_CENTER = {
    tonic: TONIC.E,
    accidental: ACCIDENTAL.Natural,
    octave: 3
};

const DEFAULT_CONCEPT = {
    intervals: MODE.Ionian.intervals,
    //intervals: CHORD.Maj.intervals,
    //intervals: CHORD.Maj13.intervals,
    //intervals: SCALE.Chromatic.intervals,
    chordInversion: 0
};

const DEFAULT_COLOR_STRATEGY = COLOR_STRATEGIES.Degree;
const DEFAULT_LABEL_STRATEGY = LABEL_STRATEGIES.Interval;

// GET

let testConcept = new Concept(DEFAULT_KEY_CENTER, DEFAULT_CONCEPT.intervals);
//testConcept.chordInversion(1);

function getNote(concept, noteIndex) {
    // Match pitchClass
    //return testConcept.getEquivalentNoteAt(noteIndex);
    // Match noteIndex
    return concept.getNoteAt(noteIndex);
}


export function ViewDriver(props) {

    let labelStrategy = DEFAULT_LABEL_STRATEGY;
    let colorStrategy = DEFAULT_COLOR_STRATEGY;

    let keyCenter = {
        octave: props.octave || DEFAULT_KEY_CENTER.octave,
        tonic: props.tonic || DEFAULT_KEY_CENTER.tonic,
        accidental: props.accidental || DEFAULT_KEY_CENTER.accidental
    };

    let concept = new Concept(keyCenter, props.intervals || DEFAULT_CONCEPT.intervals);

    return (
        <div className='view-driver'>
            <KeyCenterInput
                tonic={keyCenter.tonic}
                setTonic={props.setKeyCenterTonic}
                accidental={keyCenter.accidental}
                setAccidental={props.setKeyCenterAccidental}
                octave={keyCenter.octave}
                setOctave={props.setKeyCenterOctave}
            />
            <IntervalsInput
                intervals={props.intervals}
                setIntervals={props.setIntervals}
            />
            <Keyboard
                keyLow={-8}
                labelStrategy={labelStrategy}
                colorStrategy={colorStrategy}
                noteStrategy={(noteIndex) => getNote(concept, noteIndex)}
                noteFilter={(noteProfile, viewerProfile, fretProfile) => true}
            />
            <Fretboard
                labelStrategy={labelStrategy}
                colorStrategy={colorStrategy}
                noteStrategy={(noteIndex) => getNote(concept, noteIndex)}
                noteFilter={(noteProfile, viewerProfile, fretProfile) => true}
            />
        </div>
    );
}

/* Redux Setup */

const mapStateToProps = (state) => {
    return {
        octave: state.octave,
        tonic: state.tonic,
        accidental: state.accidental,
        intervals: state.intervals
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setKeyCenterOctave, setKeyCenterTonic, setKeyCenterAccidental, setIntervals }, dispatch);
}

let Comp = connect(mapStateToProps, mapDispatchToProps)(ViewDriver)

export default Comp;