import * as React from 'react';
import './Page.css';
import Section from './Section/Section';

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
            conceptType: CONCEPT_TYPES[0],
            concept: Theory.Presets.SCALE.MajorPentatonic,
            viewer: null
        }
    }

    getKeyCenterInputs() {
        let { keyCenter } = this.state;
        let setKeyCenter = (tonic, accidental, octave) => this.setState({ keyCenter: new Theory.KeyCenter(tonic, accidental, octave) })
        return (
            <Section header='Key Center'>
                <Inputs.TonicInput value={keyCenter.tonic} setValue={tonic => setKeyCenter(tonic, keyCenter.accidental, keyCenter.octave)} />
                <Inputs.AccidentalInput value={keyCenter.accidental} setValue={accidental => setkeyCenter(keyCenter.tonic, accidental, keyCenter.octave)} />
                <Inputs.NumericInput value={keyCenter.octave} setValue={octave => setkeyCenter(keyCenter.tonic, keyCenter.accidental, octave)} />
            </Section>
        );
    }

    getConceptInputs() {
        let { conceptType, concept } = this.state;
        return (
            <Section header='Concept'>
                <Inputs.DropdownInput
                    data={CONCEPT_TYPES}
                    value={conceptType}
                    setValue={type => this.setState({ conceptType: type })}
                />
                <Inputs.DropdownInput
                    data={conceptType.presets}
                    value={concept}
                    setValue={preset => this.setState({ concept: preset })}
                />
            </Section>
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