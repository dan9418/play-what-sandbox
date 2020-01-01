import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Keyboard, Inputs } from 'play-what-react-viewers';

export default class KeyboardPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyLow: 0,
            keyHigh: 25,
            colorStrategy: Keyboard.Strategies.ColorBy.degree,
            labelStrategy: Keyboard.Strategies.LabelBy.interval,
            mapStrategy: Strategies.MapBy.noteIndex
        }
    }

    render() {
        return (
            <Section header='Keyboard'>
                <Keyboard.Viewer
                    keyCenter={this.props.keyCenter}
                    concept={this.props.concept}
                    {...this.state}
                />

                <InputRow label='Low Key'>
                    <Inputs.NumericInput value={this.state.keyLow} setValue={value => this.setState({ keyLow: value })} />
                </InputRow>

                <InputRow label='High Key'>
                    <Inputs.NumericInput value={this.state.keyHigh} setValue={value => this.setState({ keyHigh: value })} />
                </InputRow>

                <InputRow label='Color Strategy'>
                    <Inputs.DropdownInput data={Object.values(Keyboard.Strategies.ColorBy)} value={this.state.colorStrategy} setValue={value => this.setState({ colorStrategy: value })} />
                </InputRow>

                <InputRow label='Label Strategy'>
                    <Inputs.DropdownInput data={Object.values(Keyboard.Strategies.LabelBy)} value={this.state.labelStrategy} setValue={value => this.setState({ labelStrategy: value })} />
                </InputRow>

                <InputRow label='Map Strategy'>
                    <Inputs.DropdownInput data={Object.values(Strategies.MapBy)} value={this.state.mapStrategy} setValue={value => this.setState({ mapStrategy: value })} />
                </InputRow>

            </Section>
        );
    }
}