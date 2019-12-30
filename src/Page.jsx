import * as React from 'react';
import './App.css';
import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, Inputs, ViewController, ChordAnalysis, ConceptBlock } from 'play-what-react-viewers';

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
                <h1>Play What</h1>
                <h2>Key Center</h2>
                <Inputs.KeyCenter value={this.state.keyCenter} setValue={value => this.setState({ keyCenter: value })} />
                <h2>Concept</h2>
                <Inputs.Concept value={this.state.concept} setValue={value => this.setState({ concept: value })} />
                <h2>Notes</h2>
                <ConceptBlock {...this.state} />
                <ChordAnalysis {...this.state} />
            </div>
        );
    }
}