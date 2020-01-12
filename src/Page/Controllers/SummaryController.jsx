import React, { useState } from 'react';
import InputRow from '../InputRow/InputRow';

import Inputs from '../Inputs/_module';

import PlayWhat from 'play-what';
import { ConceptBlock } from 'play-what-react-viewers';
import KeyCenterPanel from '../CompositeInputs/KeyCenterPanel';
import ConceptPanel from '../CompositeInputs/ConceptPanel';

import { CONCEPT_TYPES } from '../Shared/Defaults';
import Section from '../Section/Section';

export default function SummaryController(props) {

    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState({
        type: CONCEPT_TYPES[3],
        value: CONCEPT_TYPES[3].presets[0],
        options: CONCEPT_TYPES[3].defaultOptions
    });
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.name);

    return (
        <div>

            <div className='controller'>
                <ConceptBlock
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                />
            </div>

            <KeyCenterPanel
                keyCenter={keyCenter}
                setKeyCenter={(tonic, accidental, octave) => setKeyCenter(new PlayWhat.KeyCenter(tonic, accidental, octave))}
            />

            <ConceptPanel
                conceptData={conceptData}
                setConceptData={(type, value, options) => setConceptData({ type: type, value: value, options: options })}
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