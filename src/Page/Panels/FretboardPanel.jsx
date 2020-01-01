import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Inputs } from 'play-what-react-viewers';
import { render } from 'react-dom';

export default class FretboardPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fretLow: 0,
            fretHigh: 13
        }
    }

    render() {
        return (
            <Section header='Fretboard'>
                <Fretboard.Viewer
                    keyCenter={this.props.keyCenter}
                    concept={this.props.concept}
                    {...this.state}
                />

                <InputRow label='Low Fret'>
                    <Inputs.NumericInput value={this.state.fretLow} setValue={value => this.setState({ fretLow: value })} />
                </InputRow>

                <InputRow label='High Fret'>
                    <Inputs.NumericInput value={this.state.fretHigh} setValue={value => this.setState({ fretHigh: value })} />
                </InputRow>


            </Section>
        );
    }
}