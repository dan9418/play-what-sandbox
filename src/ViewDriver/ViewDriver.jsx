// React
import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setKeyCenterOctave, setKeyCenterTonic, setKeyCenterAccidental, setIntervals } from '../Redux/Actions/actions';
// DOM
import './ViewDriver.css';
// Play What
import { INTERVAL, Utils, TheoryEngine, LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
// Inputs
import { KeyCenterInput } from '../Inputs/KeyCenterInput/KeyCenterInput';
import { IntervalsInput } from '../Inputs/IntervalsInput/IntervalsInput';
// Theory
import { Concept } from '../Theory/Concept';
import { DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, DEFAULT_COLOR_STRATEGY, DEFAULT_LABEL_STRATEGY, DEFAULT_NOTE_STRATEGY, DEFAULT_NOTE_FILTER } from '../Theory/Defaults';

/* Component */

export function ViewDriver(props) {

    let keyCenter = {
        octave: props.octave || DEFAULT_KEY_CENTER.octave,
        tonic: props.tonic || DEFAULT_KEY_CENTER.tonic,
        accidental: props.accidental || DEFAULT_KEY_CENTER.accidental
    };

    let concept = new Concept(keyCenter, props.intervals || DEFAULT_CONCEPT.intervals);
    //concept.invert(1).reverse();

    let labelStrategy = DEFAULT_LABEL_STRATEGY;
    let colorStrategy = DEFAULT_COLOR_STRATEGY;
    let noteStrategy = (noteIndex) => concept.getNoteAt(noteIndex, true);
    let noteFilter = DEFAULT_NOTE_FILTER;

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
                noteStrategy={noteStrategy}
                noteFilter={noteFilter}
            />
            <Fretboard
                labelStrategy={labelStrategy}
                colorStrategy={colorStrategy}
                noteStrategy={noteStrategy}
                noteFilter={noteFilter}
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
    return bindActionCreators({
        setKeyCenterOctave,
        setKeyCenterTonic,
        setKeyCenterAccidental,
        setIntervals
    }, dispatch);
}

let Comp = connect(mapStateToProps, mapDispatchToProps)(ViewDriver);
export default Comp;