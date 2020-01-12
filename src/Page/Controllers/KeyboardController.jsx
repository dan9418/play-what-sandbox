import React, { useState } from 'react';
import InputRow from '../InputRow/InputRow';

import PlayWhat from 'play-what';
import { Keyboard } from 'play-what-react-viewers';
import KeyCenterPanel from '../CompositeInputs/KeyCenterPanel';
import ConceptPanel from '../CompositeInputs/ConceptPanel';

import Inputs from '../Inputs/_module';


import { CONCEPT_TYPES } from '../Shared/Defaults';
import Section from '../Section/Section';

export default function KeyboardController(props) {

    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState({
        type: CONCEPT_TYPES[3],
        value: CONCEPT_TYPES[3].presets[0],
        options: CONCEPT_TYPES[3].defaultOptions
    });
    const [keyLow, setKeyLow] = useState(0);
    const [keyHigh, setKeyHigh] = useState(24);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.noteIndex);

    return (
        <div>
            <div className='controller'>
                <Keyboard.Viewer
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    keyLow={keyLow}
                    keyHigh={keyHigh}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                    mapStrategy={mapStrategy}
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

            <Section header='Keyboard'>
                <InputRow label='Low Key'>
                    <Inputs.NumericInput value={keyLow} setValue={setKeyLow} />
                </InputRow>

                <InputRow label='High Key'>
                    <Inputs.NumericInput value={keyHigh} setValue={setKeyHigh} />
                </InputRow>

                <InputRow label='Color Strategy'>
                    <Inputs.DropdownInput
                        data={Object.values(Keyboard.Strategies.ColorBy)}
                        value={colorStrategy}
                        setValue={setColorStrategy}
                    />
                </InputRow>

                <InputRow label='Label Strategy'>
                    <Inputs.DropdownInput
                        data={Object.values(Keyboard.Strategies.LabelBy)}
                        value={labelStrategy}
                        setValue={setLabelStrategy}
                    />
                </InputRow>

                <InputRow label='Map Strategy'>
                    <Inputs.DropdownInput
                        data={Object.values(PlayWhat.MapBy)}
                        value={mapStrategy}
                        setValue={setMapStrategy}
                    />
                </InputRow>

            </Section>

        </div>
    );

}