// React
import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setKeyCenterOctave, setKeyCenterTonic, setKeyCenterAccidental, setIntervals } from '../Redux/Actions/actions';
// DOM
import './ViewDriver.css';
// Play What
import { Keyboard, Fretboard } from 'play-what-beta';
// Inputs
import { KeyCenterInput } from '../Inputs/KeyCenterInput/KeyCenterInput';
import { IntervalsInput } from '../Inputs/IntervalsInput/IntervalsInput';
// Strategies
import { LABEL_STRATEGIES } from '../Theory/TODO/LabelStrategies';
import { COLOR_STRATEGIES } from '../Theory/TODO/ColorStrategies';
// Theory
import { Concept } from '../Theory/Classes/Concept';
import { DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, DEFAULT_NOTE_STRATEGY, DEFAULT_NOTE_FILTER } from '../Theory/Constants/Defaults';
import { KeyCenter } from '../Theory/Classes/KeyCenter';

/* Component */

export function ViewDriver(props) {

    let keyCenter = new KeyCenter(
        props.tonic || DEFAULT_KEY_CENTER.tonic,
        props.accidental || DEFAULT_KEY_CENTER.accidental,
        props.octave || DEFAULT_KEY_CENTER.octave
    );

    let concept = new Concept(keyCenter, props.intervals || DEFAULT_CONCEPT.intervals);
    console.log(concept.intervals);

    let labelStrategy = LABEL_STRATEGIES.Degree;
    let colorStrategy = COLOR_STRATEGIES.Degree;
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