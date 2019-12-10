// React
import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setKeyCenterOctave, setKeyCenterTonic, setKeyCenterAccidental, setConcept, setRomanNumeral } from '../Redux/Actions/actions';
// DOM
import './ViewDriver.css';
// Play What
import { Keyboard, Fretboard } from 'play-what-beta';
// Inputs
import { KeyCenterInput } from '../Inputs/KeyCenterInput/KeyCenterInput';
import { ConceptInput } from '../Inputs/ConceptInput/ConceptInput';
// Strategies
import { LABEL_STRATEGIES } from '../Theory/TODO/LabelStrategies';
import { COLOR_STRATEGIES } from '../Theory/TODO/ColorStrategies';
// Theory
import { DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, DEFAULT_NOTE_STRATEGY, DEFAULT_NOTE_FILTER } from '../Theory/Constants/Defaults';
import { KeyCenter } from '../Theory/Classes/KeyCenter';
import { TheoryEngine } from '../Theory/Classes/TheoryEngine';
import { RomanNumeralViewer } from './Viewers/RomanNumeralViewer/RomanNumeralViewer';

/* Component */

export function ViewDriver(props) {

    let keyCenter = new KeyCenter(
        props.tonic || DEFAULT_KEY_CENTER.tonic,
        props.accidental || DEFAULT_KEY_CENTER.accidental,
        props.octave || DEFAULT_KEY_CENTER.octave
    );

    let concept = props.concept || DEFAULT_CONCEPT;
    console.log(concept);

    let labelStrategy = LABEL_STRATEGIES.Interval;
    let colorStrategy = COLOR_STRATEGIES.Degree;
    let noteStrategy = (noteIndex) => TheoryEngine.getNoteAt(keyCenter, concept, noteIndex, false);
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
            <ConceptInput
                concept={concept}
                setConcept={props.setConcept}
            />
            {concept.conceptType === 'romanNumeral' &&
                <RomanNumeralViewer
                    romanNumeral={concept}
                />
            }
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
        concept: state.concept,
        romanNumeral: state.romanNumeral
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setKeyCenterOctave,
        setKeyCenterTonic,
        setKeyCenterAccidental,
        setConcept,
        setRomanNumeral
    }, dispatch);
}

let Comp = connect(mapStateToProps, mapDispatchToProps)(ViewDriver);
export default Comp;