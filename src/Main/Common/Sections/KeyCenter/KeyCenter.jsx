import * as React from 'react';
import PlayWhat from 'play-what';

import Common from '../../_module';

export default function KeyCenterSection({ keyCenter, setKeyCenter }) {
    return (
        <Common.Layout.Section header='Key Center' preview={keyCenter.tonic.name + keyCenter.accidental.name + ' ' + keyCenter.octave}>
            <Common.Layout.InputRow label='Tonic'>
                <Common.Inputs.TonicInput value={keyCenter.tonic} setValue={tonic => setKeyCenter(new PlayWhat.KeyCenter(tonic, keyCenter.accidental, keyCenter.octave))} />
            </Common.Layout.InputRow>
            <Common.Layout.InputRow label='Accidental'>
                <Common.Inputs.AccidentalInput value={keyCenter.accidental} setValue={accidental => setKeyCenter(new PlayWhat.KeyCenter(keyCenter.tonic, accidental, keyCenter.octave))} />
            </Common.Layout.InputRow>
            <Common.Layout.InputRow label='Octave'>
                <Common.Inputs.NumericInput value={keyCenter.octave} setValue={octave => setKeyCenter(new PlayWhat.KeyCenter(keyCenter.tonic, keyCenter.accidental, octave))} />
            </Common.Layout.InputRow>
        </Common.Layout.Section>
    );
}