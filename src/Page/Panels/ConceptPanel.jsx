import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Inputs, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';

export default function ConceptPanel(props) {
    let { data, conceptType, setConceptType, concept, setConcept, conceptOptions, setConceptOptions } = props;
    return (
        <Section header='Concept'>
            <InputRow label='Type'>
                <Inputs.DropdownInput
                    data={data}
                    value={conceptType}
                    setValue={setConceptType}
                />
            </InputRow>
            <InputRow label='Preset'>
                <Inputs.DropdownInput
                    data={conceptType.presets}
                    value={concept}
                    setValue={setConcept}
                />
            </InputRow>
            {(concept instanceof Theory.ConceptTypes.Scale || concept instanceof Theory.ConceptTypes.IntervalPair) && <ScalePanel concept={concept} options={conceptOptions} setConceptOptions={setConceptOptions} />}
            {concept instanceof Theory.ConceptTypes.Chord && <ChordPanel concept={concept} options={conceptOptions} setConceptOptions={setConceptOptions} />}
        </Section >
    );
}

function ScalePanel(props) {
    return (
        <InputRow label='Reverse'>
            <Inputs.SwitchInput
                value={props.options.reverse}
                setValue={(value) => props.setConceptOptions({
                    ...props.options,
                    reverse: value
                }, props.concept.copy().reverse())}
            />
        </InputRow>
    );
}

function ChordPanel(props) {
    return (
        <InputRow label='Inversion'>
            <Inputs.NumericInput
                value={props.options.chordInversion}
                setValue={(value) => props.setConceptOptions({
                    ...props.options,
                    chordInversion: value
                }, props.concept.copy().chordInversion(value))}
            />
        </InputRow>
    );
}