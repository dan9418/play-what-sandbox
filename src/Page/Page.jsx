import * as React from 'react';
import './Page.css';
import Section from './Section/Section';
import InputRow from './InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, Inputs, ViewController, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';
import KeyCenterPanel from './Panels/KeyCenterPanel';
import ConceptPanel from './Panels/ConceptPanel';

const CONCEPT_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        presets: Object.values(Theory.Presets.INTERVAL_PAIR)
    },
    {
        id: 'chord',
        name: 'Chord',
        presets: Object.values(Theory.Presets.CHORD)
    },
    {
        id: 'scale',
        name: 'Scale',
        presets: Object.values(Theory.Presets.SCALE)
    },
    {
        id: 'mode',
        name: 'Mode',
        presets: Object.values(Theory.Presets.MODE)
    }
];

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
            conceptType: CONCEPT_TYPES[2],
            concept: Theory.Presets.SCALE.MajorPentatonic
        }
    }

    getScaleInputs() {
        let value = this.state.concept_scale_reverse;
        return (
            <InputRow label='Reverse'>
                <Inputs.SwitchInput
                    value={value}
                    setValue={(value) => this.setState({
                        concept: this.state.concept.reverse(),
                        concept_scale_reverse: value
                    })}
                />
            </InputRow>
        );
    }

    getChordInputs() {
        let value = this.state.concept_chord_inversion || 0;
        return (
            <InputRow label='Inversion'>
                <Inputs.NumericInput
                    value={value}
                    setValue={(value) => this.setState({
                        concept: this.state.concept.chordInversion(value),
                        concept_chord_inversion: value
                    })}
                />
            </InputRow>
        );
    }

    render() {
        return (
            <div className='play-what-sample'>

                <div className='header'>Inputs</div>

                <KeyCenterPanel
                    keyCenter={this.state.keyCenter}
                    setKeyCenter={(tonic, accidental, octave) => this.setState({ keyCenter: new Theory.KeyCenter(tonic, accidental, octave) })}
                />

                <ConceptPanel
                    data={CONCEPT_TYPES}
                    conceptType={this.state.conceptType}
                    setConceptType={type => this.setState({ conceptType: type, concept: type.presets[0] })}
                    concept={this.state.concept}
                    setConcept={concept => this.setState({ concept: concept })}
                />

                <div className='header'>Outputs</div>

                <Section header='Summary'>
                    <ConceptBlock {...this.state} />
                </Section>

                <Section header='Note Data'>
                    <NoteTable {...this.state} />
                </Section>

                <Section header='Chord Analysis'>
                    <ChordAnalysis {...this.state} />
                </Section>
            </div>
        );
    }
}