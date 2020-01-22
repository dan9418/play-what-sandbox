import * as React from 'react';
import Section from '../Layout/Section/Section';
import InputRow from '../Layout/InputRow/InputRow';

import Inputs from '../Inputs/_module';

import PlayWhat from 'play-what';

import { CONCEPT_TYPES } from '../Shared/Defaults';

export default function ConceptPanel({ conceptData, setConceptData }) {
    let data = CONCEPT_TYPES;
    return (
        <Section header='Notes' preview={conceptData.value.name + ' ' + conceptData.type.name}>
            <InputRow label='Type'>
                <Inputs.DropdownInput
                    data={data}
                    value={conceptData.type}
                    setValue={type => setConceptData({ type: type, value: type.presets[0], options: type.defaultOptions })}
                />
            </InputRow>
            <InputRow label='Preset'>
                <Inputs.DropdownInput
                    data={conceptData.type.presets}
                    value={conceptData.value}
                    setValue={preset => setConceptData({ type: conceptData.type, value: preset, options: conceptData.options })}
                />
            </InputRow>

            {(conceptData.value instanceof PlayWhat.ConceptTypes.Scale || conceptData.value instanceof PlayWhat.ConceptTypes.IntervalPair) && <ScalePanel conceptData={conceptData} setConceptData={setConceptData} />}
            {conceptData.value instanceof PlayWhat.ConceptTypes.Chord && <ChordPanel conceptData={conceptData} setConceptData={setConceptData} />}

        </Section >
    );
}

function ScalePanel({ conceptData, setConceptData }) {
    return (
        <InputRow label='Reverse'>
            <Inputs.SwitchInput
                value={conceptData.options.reverse}
                setValue={(value) => setConceptData({
                    type: conceptData.type,
                    value: conceptData.value.copy().reverse(),
                    options: {
                        ...conceptData.options,
                        reverse: value
                    }
                })}
            />
        </InputRow>
    );
}

function ChordPanel({ conceptData, setConceptData }) {
    return (
        <InputRow label='Inversion'>
            <Inputs.NumericInput
                value={conceptData.options.chordInversion}
                setValue={(value) => setConceptData({
                    type: conceptData.type,
                    value: conceptData.value.copy().chordInversion(value),
                    options: {
                        ...conceptData.options,
                        chordInversion: value
                    }
                })}
            />
        </InputRow>
    );
}