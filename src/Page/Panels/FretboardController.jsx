import React, { useState } from 'react';
import InputRow from '../InputRow/InputRow';

import PlayWhat from 'play-what';
import { Fretboard, Inputs } from 'play-what-react-viewers';
import KeyCenterPanel from './KeyCenterPanel';
import ConceptPanel from './ConceptPanel';

import { CONCEPT_TYPES } from '../Shared/Defaults';
import Section from '../Section/Section';

export default function FretboardController(props) {

    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState({
        type: CONCEPT_TYPES[0],
        value: CONCEPT_TYPES[0].presets[0],
        options: CONCEPT_TYPES[0].defaultOptions
    });
    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(13);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.noteIndex);

    return (
        <div>

            <div className='controller'>
                <Fretboard.Viewer
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    fretLow={fretLow}
                    fretHigh={fretHigh}
                    showDots={showDots}
                    showFretNumbers={showFretNumbers}
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

            <Section header='Fretboard'>
                <InputRow label='Low Fret'>
                    <Inputs.NumericInput value={fretLow} setValue={setFretLow} />
                </InputRow>

                <InputRow label='High Fret'>
                    <Inputs.NumericInput value={fretHigh} setValue={setFretHigh} />
                </InputRow>

                <InputRow label='Show Dots'>
                    <Inputs.SwitchInput value={showDots} setValue={setShowDots} />
                </InputRow>

                <InputRow label='Show Fret Numbers'>
                    <Inputs.SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
                </InputRow>

                <InputRow label='Color Strategy'>
                    <Inputs.DropdownInput
                        data={Object.values(Fretboard.Strategies.ColorBy)}
                        value={colorStrategy}
                        setValue={setColorStrategy}
                    />
                </InputRow>

                <InputRow label='Label Strategy'>
                    <Inputs.DropdownInput
                        data={Object.values(Fretboard.Strategies.LabelBy)}
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