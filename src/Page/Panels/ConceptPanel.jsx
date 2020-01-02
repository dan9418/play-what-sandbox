import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Inputs, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';

export default function ConceptPanel(props) {
    let { data, conceptData, setConceptData } = props;
    return (
        <Section header='Concept'>
            <InputRow label='Type'>
                <Inputs.DropdownInput
                    data={data}
                    value={conceptData.type}
                    setValue={type => setConceptData(type, type.presets[0], type.defaultOptions)}
                />
            </InputRow>
            <InputRow label='Preset'>
                <Inputs.DropdownInput
                    data={conceptData.type.presets}
                    value={conceptData.value}
                    setValue={preset => setConceptData(conceptData.type, preset, conceptData.options)}
                />
            </InputRow>

            {(conceptData.value instanceof Theory.ConceptTypes.Scale || conceptData.value instanceof Theory.ConceptTypes.IntervalPair) && <ScalePanel conceptData={conceptData} setConceptData={setConceptData} />}
            {conceptData.value instanceof Theory.ConceptTypes.Chord && <ChordPanel conceptData={conceptData} setConceptData={setConceptData} />}

        </Section >
    );
}

function ScalePanel(props) {
    let { conceptData, setConceptData } = props;
    return (
        <InputRow label='Reverse'>
            <Inputs.SwitchInput
                value={conceptData.options.reverse}
                setValue={(value) => setConceptData(
                    conceptData.type,
                    conceptData.value.copy().reverse(),
                    {
                        ...conceptData.options,
                        reverse: value
                    })
                }
            />
        </InputRow>
    );
}

function ChordPanel(props) {
    let { conceptData, setConceptData } = props;
    return (
        <InputRow label='Inversion'>
            <Inputs.NumericInput
                value={conceptData.options.chordInversion}
                setValue={(value) => setConceptData(
                    conceptData.type,
                    conceptData.value.copy().chordInversion(value),
                    {
                        ...conceptData.options,
                        chordInversion: value
                    })
                }
            />
        </InputRow>
    );
}