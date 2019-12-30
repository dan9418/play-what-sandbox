import * as React from 'react';
import './Page.css';
import Section from './Section/Section';
import InputRow from './InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, Inputs, ViewController, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';

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

    getKeyCenterInputs() {
        let { keyCenter } = this.state;
        let setKeyCenter = (tonic, accidental, octave) => this.setState({ keyCenter: new Theory.KeyCenter(tonic, accidental, octave) })
        return (
            <Section header='Key Center'>
                <InputRow label='Tonic'>
                    <Inputs.TonicInput value={keyCenter.tonic} setValue={tonic => setKeyCenter(tonic, keyCenter.accidental, keyCenter.octave)} />
                </InputRow>
                <InputRow label='Accidental'>
                    <Inputs.AccidentalInput value={keyCenter.accidental} setValue={accidental => setkeyCenter(keyCenter.tonic, accidental, keyCenter.octave)} />
                </InputRow>
                <InputRow label='Octave'>
                    <Inputs.NumericInput value={keyCenter.octave} setValue={octave => setkeyCenter(keyCenter.tonic, keyCenter.accidental, octave)} />
                </InputRow>
            </Section>
        );
    }

    getConceptInputs() {
        let { conceptType, concept } = this.state;
        return (
            <Section header='Concept'>
                <InputRow label='Type'>
                    <Inputs.DropdownInput
                        data={CONCEPT_TYPES}
                        value={conceptType}
                        setValue={type => this.setState({ conceptType: type, concept: type.presets[0] })}
                    />
                </InputRow>
                <InputRow label='Preset'>
                    <Inputs.DropdownInput
                        data={conceptType.presets}
                        value={concept}
                        setValue={preset => this.setState({ concept: preset })}
                    />
                </InputRow>
                {concept instanceof Theory.ConceptTypes.Scale && this.getScaleInputs()}
                {concept instanceof Theory.ConceptTypes.Chord && this.getChordInputs()}
            </Section >
        );
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

                {this.getKeyCenterInputs()}

                {this.getConceptInputs()}

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