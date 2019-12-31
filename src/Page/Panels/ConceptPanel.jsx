import * as React from 'react';
import Section from '../Section/Section';
import InputRow from '../InputRow/InputRow';

import { Theory, Strategies, Utils } from 'play-what';
import { Inputs, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';

export default function ConceptPanel(props) {
    let { data, conceptType, setConceptType, concept, setConcept } = props;
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
            {/*concept instanceof Theory.ConceptTypes.Scale && this.getScaleInputs()*/}
            {/*concept instanceof Theory.ConceptTypes.Chord && this.getChordInputs()*/}
        </Section >
    );
}