import React, { useState } from 'react';
import InputRow from '../Layout/InputRow/InputRow';

import Inputs from '../Inputs/_module';

import PlayWhat from 'play-what';
import { Fretboard } from 'play-what-react-viewers';
import KeyCenterPanel from '../CompositeInputs/KeyCenterPanel';
import ConceptPanel from '../CompositeInputs/ConceptPanel';

import { CONCEPT_TYPES } from '../Shared/Defaults';
import Section from '../Layout/Section/Section';
import { useKeyCenter, useConceptData } from '../Shared/Hooks';
import FretboardStringsInput from '../CompositeInputs/FretboardStringsInput';

export default function FretboardController(props) {

    const [keyCenter, setKeyCenter] = useKeyCenter();
    const [conceptData, setConceptData] = useConceptData();
    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(13);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [strings, setStrings] = useState(Fretboard.Defaults.strings);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.noteIndex);

    return (
        <div className='controller'>

            <div className='viewer'>
                <Fretboard.Viewer
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    fretLow={fretLow}
                    fretHigh={fretHigh}
                    showDots={showDots}
                    showFretNumbers={showFretNumbers}
                    strings={strings}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                    mapStrategy={mapStrategy}
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

            <Section header='Colors' preview={colorStrategy.name}>
                <InputRow label='Color by...'>
                    <Inputs.DropdownInput
                        data={Object.values(Fretboard.Strategies.ColorBy)}
                        value={colorStrategy}
                        setValue={setColorStrategy}
                    />
                </InputRow>
            </Section>

            <Section header='Labels' preview={labelStrategy.name}>
                <InputRow label='Label by...'>
                    <Inputs.DropdownInput
                        data={Object.values(Fretboard.Strategies.LabelBy)}
                        value={labelStrategy}
                        setValue={setLabelStrategy}
                    />
                </InputRow>

                <InputRow label='Show Dots'>
                    <Inputs.SwitchInput value={showDots} setValue={setShowDots} />
                </InputRow>

                <InputRow label='Show Fret Numbers'>
                    <Inputs.SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
                </InputRow>
            </Section>

            <Section header='Fret Range' preview={fretLow + ' - ' + fretHigh}>
                <InputRow label='Low Fret'>
                    <Inputs.NumericInput value={fretLow} setValue={setFretLow} />
                </InputRow>

                <InputRow label='High Fret'>
                    <Inputs.NumericInput value={fretHigh} setValue={setFretHigh} />
                </InputRow>
            </Section>

            <Section header='Filters' preview={mapStrategy.name}>
                <InputRow label='Map notes by...'>
                    <Inputs.DropdownInput
                        data={Object.values(PlayWhat.MapBy)}
                        value={mapStrategy}
                        setValue={setMapStrategy}
                    />
                </InputRow>
            </Section>

            <Section header='Tuning' preview={strings.length + ' Strings'}>
                <FretboardStringsInput strings={strings} setStrings={setStrings} />
            </Section>

        </div>
    );

}