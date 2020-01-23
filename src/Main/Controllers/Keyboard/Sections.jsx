import React from 'react';
import PlayWhat from 'play-what';
import { Keyboard } from 'play-what-react-viewers';

import Common from '../../Common/_module';

export const Range = ({ keyLow, setKeyLow, keyHigh, setKeyHigh }) => (
    <Common.Layout.Section header='Range'>
        <Common.Layout.InputRow label='Low Key'>
            <Common.Inputs.NumericInput value={keyLow} setValue={setKeyLow} />
        </Common.Layout.InputRow>

        <Common.Layout.InputRow label='High Key'>
            <Common.Inputs.NumericInput value={keyHigh} setValue={setKeyHigh} />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);

export const Color = ({ colorStrategy, setColorStrategy }) => (
    <Common.Layout.Section header='Colors'>
        <Common.Layout.InputRow label='Color by...'>
            <Common.Inputs.DropdownInput
                data={Object.values(Keyboard.Strategies.ColorBy)}
                value={colorStrategy}
                setValue={setColorStrategy}
            />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);

export const Label = ({ labelStrategy, setLabelStrategy }) => (
    <Common.Layout.Section header='Labels'>
        <Common.Layout.InputRow label='Label by...'>
            <Common.Inputs.DropdownInput
                data={Object.values(Keyboard.Strategies.LabelBy)}
                value={labelStrategy}
                setValue={setLabelStrategy}
            />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);

export const Filter = ({ mapStrategy, setMapStrategy }) => (
    <Common.Layout.Section header='Filters'>
        <Common.Layout.InputRow label='Map by...'>
            <Common.Inputs.DropdownInput
                data={Object.values(PlayWhat.MapBy)}
                value={mapStrategy}
                setValue={setMapStrategy}
            />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);