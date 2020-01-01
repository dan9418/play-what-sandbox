import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Keyboard, Inputs } from 'play-what-react-viewers';
import { render } from 'react-dom';

export default class KeyboardPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyLow: 0,
            keyHigh: 25
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


            </Section>
        );
    }
}