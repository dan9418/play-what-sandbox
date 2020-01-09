import React, { useState } from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import PlayWhat from 'play-what';
import { Fretboard, Inputs } from 'play-what-react-viewers';

export default function FretboardPanel(props) {

    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(13);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.noteIndex);

    return (
        <div>
            <Fretboard.Viewer
                keyCenter={props.keyCenter}
                concept={props.concept}
                fretLow={fretLow}
                fretHigh={fretHigh}
                showDots={showDots}
                showFretNumbers={showFretNumbers}
                colorStrategy={colorStrategy}
                labelStrategy={labelStrategy}
                mapStrategy={mapStrategy}
            />

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

        </div>
    );

}