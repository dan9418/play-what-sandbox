import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Inputs } from 'play-what-react-viewers';

export default class FretboardPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fretLow: 0,
            fretHigh: 13,
            showDots: true,
            showFretNumbers: true,
            colorStrategy: Fretboard.Strategies.ColorBy.degree,
            labelStrategy: Fretboard.Strategies.LabelBy.interval,
            mapStrategy: Strategies.MapBy.noteIndex
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

                <InputRow label='Show Dots'>
                    <Inputs.SwitchInput value={this.state.showDots} setValue={value => this.setState({ showDots: value })} />
                </InputRow>

                <InputRow label='Show Fret Numbers'>
                    <Inputs.SwitchInput value={this.state.showFretNumbers} setValue={value => this.setState({ showFretNumbers: value })} />
                </InputRow>

                <InputRow label='Color Strategy'>
                    <Inputs.DropdownInput data={Object.values(Fretboard.Strategies.ColorBy)} value={this.state.colorStrategy} setValue={value => this.setState({ colorStrategy: value })} />
                </InputRow>

                <InputRow label='Label Strategy'>
                    <Inputs.DropdownInput data={Object.values(Fretboard.Strategies.LabelBy)} value={this.state.labelStrategy} setValue={value => this.setState({ labelStrategy: value })} />
                </InputRow>

                <InputRow label='Map Strategy'>
                    <Inputs.DropdownInput data={Object.values(Strategies.MapBy)} value={this.state.mapStrategy} setValue={value => this.setState({ mapStrategy: value })} />
                </InputRow>

            </Section>
        );
    }
}