import React, { useState } from 'react';
import InputRow from '../Layout/InputRow/InputRow';

import PlayWhat from 'play-what';
import { ChordAnalysis } from 'play-what-react-viewers';
import KeyCenterPanel from '../CompositeInputs/KeyCenterPanel';
import ConceptPanel from '../CompositeInputs/ConceptPanel';

import Section from '../Layout/Section/Section';
import { useKeyCenter, useConceptData } from '../Shared/Hooks';

export default function ChordAnalysisController(props) {

    const [keyCenter, setKeyCenter] = useKeyCenter();
    const [conceptData, setConceptData] = useConceptData();

    return (
        <div>
            <div className='controller'>
                <ChordAnalysis
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                />
            </div>

            <KeyCenterPanel
                keyCenter={keyCenter}
                setKeyCenter={setKeyCenter}
            />

            <ConceptPanel
                conceptData={conceptData}
                setConceptData={setConceptData}
            />

        </div>
    );

}