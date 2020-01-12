import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import Inputs from '../Inputs/_module';

import PlayWhat from 'play-what';
import { ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';

export default function KeyCenterPanel(props) {
    let { keyCenter, setKeyCenter } = props;
    return (
        <Section header='Key Center'>
            <InputRow label='Tonic'>
                <Inputs.TonicInput value={keyCenter.tonic} setValue={tonic => setKeyCenter(tonic, keyCenter.accidental, keyCenter.octave)} />
            </InputRow>
            <InputRow label='Accidental'>
                <Inputs.AccidentalInput value={keyCenter.accidental} setValue={accidental => setKeyCenter(keyCenter.tonic, accidental, keyCenter.octave)} />
            </InputRow>
            <InputRow label='Octave'>
                <Inputs.NumericInput value={keyCenter.octave} setValue={octave => setKeyCenter(keyCenter.tonic, keyCenter.accidental, octave)} />
            </InputRow>
        </Section>
    );
}