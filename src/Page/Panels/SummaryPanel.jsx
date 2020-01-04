import React, { useState } from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import PlayWhat from 'play-what';
import { ConceptBlock, Inputs } from 'play-what-react-viewers';

export default function SummaryPanel(props) {

    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.name);

    return (
        <Section header='Summary'>
            <ConceptBlock
                keyCenter={props.keyCenter}
                concept={props.concept}
                colorStrategy={colorStrategy}
                labelStrategy={labelStrategy}
            />

            <InputRow label='Color Strategy'>
                <Inputs.DropdownInput data={Object.values(PlayWhat.ColorBy)} value={colorStrategy} setValue={setColorStrategy} />
            </InputRow>

            <InputRow label='Label Strategy'>
                <Inputs.DropdownInput data={Object.values(PlayWhat.LabelBy)} value={labelStrategy} setValue={setLabelStrategy} />
            </InputRow>

        </Section>
    );
}