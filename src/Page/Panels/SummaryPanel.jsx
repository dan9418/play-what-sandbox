import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { ConceptBlock, Inputs } from 'play-what-react-viewers';

export default class SummaryPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colorStrategy: Strategies.ColorBy.degree,
            labelStrategy: Strategies.LabelBy.interval
        }
    }

    render() {
        return (
            <Section header='Summary'>
                <ConceptBlock
                    keyCenter={this.props.keyCenter}
                    concept={this.props.concept}
                    {...this.state}
                />

                <InputRow label='Color Strategy'>
                    <Inputs.DropdownInput data={Object.values(Strategies.ColorBy)} value={this.state.colorStrategy} setValue={value => this.setState({ colorStrategy: value })} />
                </InputRow>

                <InputRow label='Label Strategy'>
                    <Inputs.DropdownInput data={Object.values(Strategies.LabelBy)} value={this.state.labelStrategy} setValue={value => this.setState({ labelStrategy: value })} />
                </InputRow>

            </Section>
        );
    }
}