import * as React from 'react';
import './Page.css';
import Section from './Section/Section';
import InputRow from './InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, Inputs, ViewController, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';
import KeyCenterPanel from './Panels/KeyCenterPanel';
import ConceptPanel from './Panels/ConceptPanel';
import FretboardPanel from './Panels/FretboardPanel';
import KeyboardPanel from './Panels/KeyboardPanel';
import SummaryPanel from './Panels/SummaryPanel';

const CONCEPT_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        presets: Object.values(Theory.Presets.INTERVAL_PAIR),
        defaultOptions: {
            reverse: false
        }
    },
    {
        id: 'chord',
        name: 'Chord',
        presets: Object.values(Theory.Presets.CHORD),
        defaultOptions: {
            chordInversion: 0
        }
    },
    {
        id: 'scale',
        name: 'Scale',
        presets: Object.values(Theory.Presets.SCALE),
        defaultOptions: {
            reverse: false
        }
    },
    {
        id: 'mode',
        name: 'Mode',
        presets: Object.values(Theory.Presets.MODE),
        defaultOptions: {
            reverse: false
        }
    }
];

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
            conceptType: CONCEPT_TYPES[2],
            concept: Theory.Presets.SCALE.MajorPentatonic,
            conceptOptions: CONCEPT_TYPES[2].defaultOptions
        }
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
                    setConceptType={type => this.setState({ conceptType: type, concept: type.presets[0], conceptOptions: type.defaultOptions })}
                    concept={this.state.concept}
                    setConcept={concept => this.setState({ concept: concept })}
                    conceptOptions={this.state.conceptOptions}
                    setConceptOptions={(options, concept) => this.setState({ conceptOptions: options, concept: concept })}
                />

                <div className='header'>Outputs</div>

                <SummaryPanel
                    keyCenter={this.state.keyCenter}
                    concept={this.state.concept}
                />

                <Section header='Note Data'>
                    <NoteTable {...this.state} />
                </Section>

                <Section header='Chord Analysis'>
                    <ChordAnalysis {...this.state} />
                </Section>

                <FretboardPanel
                    keyCenter={this.state.keyCenter}
                    concept={this.state.concept}
                />

                <KeyboardPanel
                    keyCenter={this.state.keyCenter}
                    concept={this.state.concept}
                />

            </div>
        );
    }
}