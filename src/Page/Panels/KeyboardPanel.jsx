import React, { useState } from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import PlayWhat from 'play-what';
import { Keyboard, Inputs } from 'play-what-react-viewers';

export default function KeyboardPanel(props) {

    const [keyLow, setKeyLow] = useState(0);
    const [keyHigh, setKeyHigh] = useState(24);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.noteIndex);

    return (
        <Section header='Keyboard'>
            <Keyboard.Viewer
                keyCenter={props.keyCenter}
                concept={props.concept}
                keyLow={keyLow}
                keyHigh={keyHigh}
                colorStrategy={colorStrategy}
                labelStrategy={labelStrategy}
                mapStrategy={mapStrategy}
            />

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
    );

}