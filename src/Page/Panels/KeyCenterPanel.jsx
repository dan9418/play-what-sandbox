import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Inputs, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';


export default function KeyCenterPanel(props) {
    let { keyCenter, setKeyCenter } = props;
    return (
        <Section header='Key Center'>
            <InputRow label='Tonic'>
                <Inputs.TonicInput value={keyCenter.tonic} setValue={tonic => setKeyCenter(tonic, keyCenter.accidental, keyCenter.octave)} />
            </InputRow>
            <InputRow label='Accidental'>
                <Inputs.AccidentalInput value={keyCenter.accidental} setValue={accidental => setkeyCenter(keyCenter.tonic, accidental, keyCenter.octave)} />
            </InputRow>
            <InputRow label='Octave'>
                <Inputs.NumericInput value={keyCenter.octave} setValue={octave => setkeyCenter(keyCenter.tonic, keyCenter.accidental, octave)} />
            </InputRow>
        </Section>
    );
}