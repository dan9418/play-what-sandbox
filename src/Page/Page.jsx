import * as React from 'react';
import './Page.css';
import Section from './Section/Section';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, Inputs, ViewController, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
            concept: Theory.Presets.SCALE.MajorPentatonic,
            viewer: null
        }
    }

    render() {
        return (
            <div className='play-what-sample'>
                <div className='header'>Inputs</div>
                <Section header='Key Center'>
                    <Inputs.KeyCenter value={this.state.keyCenter} setValue={value => this.setState({ keyCenter: value })} />
                </Section>
                <Section header='Concept'>
                    <Inputs.Concept value={this.state.concept} setValue={value => this.setState({ concept: value })} />
                </Section>

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