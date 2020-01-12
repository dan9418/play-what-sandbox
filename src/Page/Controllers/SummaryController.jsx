import React, { useState } from 'react';
import InputRow from '../Layout/InputRow/InputRow';

import Inputs from '../Inputs/_module';

import PlayWhat from 'play-what';
import { Summary } from 'play-what-react-viewers';
import KeyCenterPanel from '../CompositeInputs/KeyCenterPanel';
import ConceptPanel from '../CompositeInputs/ConceptPanel';

import Section from '../Layout/Section/Section';
import { useKeyCenter, useConceptData } from '../Shared/Hooks';

export default function SummaryController(props) {

    const [keyCenter, setKeyCenter] = useKeyCenter();
    const [conceptData, setConceptData] = useConceptData();
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.name);

    return (
        <div>

            <div className='controller'>
                <Summary
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                />
            </div>

            <KeyCenterPanel
                keyCenter={keyCenter}
                setKeyCenter={setKeyCenter}
            />

            <ConceptPanel
                conceptData={conceptData}
                setConceptData={setConceptData}
            />

            <Section header='Options'>
                <InputRow label='Color Strategy'>
                    <Inputs.DropdownInput data={Object.values(PlayWhat.ColorBy)} value={colorStrategy} setValue={setColorStrategy} />
                </InputRow>

                <InputRow label='Label Strategy'>
                    <Inputs.DropdownInput data={Object.values(PlayWhat.LabelBy)} value={labelStrategy} setValue={setLabelStrategy} />
                </InputRow>
            </Section>

        </div >
    );
}