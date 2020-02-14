import React from 'react';
import PlayWhat from 'play-what';

import Common from '../../Common/_module';
import * as Inputs from './Inputs'

export const Color = ({ colorStrategy, setColorStrategy }) => (
    <Common.Layout.Section header='Colors' preview={colorStrategy.name}>
        <Common.Layout.InputRow label='Color by...'>
            <Common.Inputs.DropdownInput
                data={Object.values({})}
                value={colorStrategy}
                setValue={setColorStrategy}
            />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);

export const Label = ({ labelStrategy, setLabelStrategy, showDots, setShowDots, showFretNumbers, setShowFretNumbers }) => (
    <Common.Layout.Section header='Labels' preview={labelStrategy.name}>
        <Common.Layout.InputRow label='Label by...'>
            <Common.Inputs.LabelInput
                value={labelStrategy}
                setValue={setLabelStrategy}
            />
        </Common.Layout.InputRow>

        <Common.Layout.InputRow label='Show Dots'>
            <Common.Inputs.SwitchInput value={showDots} setValue={setShowDots} />
        </Common.Layout.InputRow>

        <Common.Layout.InputRow label='Show Fret Numbers'>
            <Common.Inputs.SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);

export const Range = ({ fretLow, setFretLow, fretHigh, setFretHigh }) => (
    <Common.Layout.Section header='Fret Range' preview={fretLow + ' - ' + fretHigh}>
        <Common.Layout.InputRow label='Low Fret'>
            <Common.Inputs.NumericInput value={fretLow} setValue={setFretLow} />
        </Common.Layout.InputRow>

        <Common.Layout.InputRow label='High Fret'>
            <Common.Inputs.NumericInput value={fretHigh} setValue={setFretHigh} />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);

export const Filter = ({ mapStrategy, setMapStrategy }) => (
    <Common.Layout.Section header='Filters' preview={mapStrategy.name}>
        <Common.Layout.InputRow label='Map notes by...'>
            <Common.Inputs.DropdownInput
                data={Object.values(PlayWhat.MapBy)}
                value={mapStrategy}
                setValue={setMapStrategy}
            />
        </Common.Layout.InputRow>
    </Common.Layout.Section>
);

export const Tuning = ({ strings, setStrings }) => (
    <Common.Layout.Section header='Tuning' preview={strings.length + ' Strings'}>
        <Inputs.Strings strings={strings} setStrings={setStrings} />
    </Common.Layout.Section>
);