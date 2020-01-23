import React, { useState } from 'react';
import PlayWhat from 'play-what';
import { ChordAnalysis } from 'play-what-react-viewers';

import Common from '../../Common/_module';

export default function ChordAnalysisController(props) {

    const [keyCenter, setKeyCenter] = Common.Hooks.useKeyCenter();
    const [conceptData, setConceptData] = Common.Hooks.useConceptData();

    return (
        <div className='controller'>
            <div className='viewer'>
                <ChordAnalysis
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                />
            </div>

            <Common.Sections.KeyCenter
                keyCenter={keyCenter}
                setKeyCenter={setKeyCenter}
            />

            <Common.Sections.Concept
                conceptData={conceptData}
                setConceptData={setConceptData}
            />

        </div>
    );

}