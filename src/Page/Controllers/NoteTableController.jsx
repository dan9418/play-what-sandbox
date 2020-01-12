import React, { useState } from 'react';
import InputRow from '../InputRow/InputRow';

import PlayWhat from 'play-what';
import { NoteTable } from 'play-what-react-viewers';
import KeyCenterPanel from '../CompositeInputs/KeyCenterPanel';
import ConceptPanel from '../CompositeInputs/ConceptPanel';

import { CONCEPT_TYPES } from '../Shared/Defaults';
import Section from '../Section/Section';

export default function NoteTableController(props) {

    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState({
        type: CONCEPT_TYPES[3],
        value: CONCEPT_TYPES[3].presets[0],
        options: CONCEPT_TYPES[3].defaultOptions
    });

    return (
        <div>
            <div className='controller'>
                <NoteTable
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                />
            </div>

            <KeyCenterPanel
                keyCenter={keyCenter}
                setKeyCenter={(tonic, accidental, octave) => setKeyCenter(new PlayWhat.KeyCenter(tonic, accidental, octave))}
            />

            <ConceptPanel
                conceptData={conceptData}
                setConceptData={(type, value, options) => setConceptData({ type: type, value: value, options: options })}
            />

        </div>
    );

}