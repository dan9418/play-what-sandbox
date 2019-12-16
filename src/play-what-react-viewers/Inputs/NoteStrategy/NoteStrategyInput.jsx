import * as React from 'react';
import { KeyCenterInput } from '../KeyCenterInput/KeyCenterInput';
import { ConceptInput } from '../ConceptInput/ConceptInput';

import {
    KeyCenter,
    TONIC,
    ACCIDENTAL,
    INTERVAL_PAIR,
    CHORD,
    SCALE,
    MODE,
    NoteStrategies
} from "../../../play-what/index";

export class NoteStrategyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyCenter: new KeyCenter(TONIC.C, ACCIDENTAL.Natural, 4),
            concept: CHORD.Maj,
            filterOctave: true
        }
    }
    setValue(keyCenter, concept, filterOctave) {
        this.props.setValue(
            (noteIndex) => NoteStrategies.getNoteAt(noteIndex, keyCenter, concept, filterOctave)
        );
    }
    render() {
        return (
            <div className='note-strategy-input'>
                <div className='input-title'>
                    Note Strategy
            </div>
                <KeyCenterInput value={this.state.keyCenter} setValue={(keyCenter => this.setValue(keyCenter, this.state.concept, this.state.filterOctave))} />
                <ConceptInput value={this.state.concept} setValue={(concept => this.setValue(this.state.keyCenter, concept, this.state.filterOctave))}/>
            </div>
        );
    }
}