import * as React from 'react';
import Section from '../Layout/Section/Section';
import InputRow from '../Layout/InputRow/InputRow';
import Inputs from '../Inputs/_module';
import PlayWhat from 'play-what';

export default function KeyCenterPanel({ keyCenter, setKeyCenter }) {
    return (
        <Section header='Key Center' preview={keyCenter.tonic.name + keyCenter.accidental.name + ' ' + keyCenter.octave}>
            <InputRow label='Tonic'>
                <Inputs.TonicInput value={keyCenter.tonic} setValue={tonic => setKeyCenter(new PlayWhat.KeyCenter(tonic, keyCenter.accidental, keyCenter.octave))} />
            </InputRow>
            <InputRow label='Accidental'>
                <Inputs.AccidentalInput value={keyCenter.accidental} setValue={accidental => setKeyCenter(new PlayWhat.KeyCenter(keyCenter.tonic, accidental, keyCenter.octave))} />
            </InputRow>
            <InputRow label='Octave'>
                <Inputs.NumericInput value={keyCenter.octave} setValue={octave => setKeyCenter(new PlayWhat.KeyCenter(keyCenter.tonic, keyCenter.accidental, octave))} />
            </InputRow>
        </Section>
    );
}