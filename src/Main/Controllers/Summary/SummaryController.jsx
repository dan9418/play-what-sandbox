import React, { useState } from 'react';
import PlayWhat from 'play-what';
import { Summary } from 'play-what-react-viewers';

import Common from '../../Common/_module';

export default function SummaryController(props) {

    const [keyCenter, setKeyCenter] = Common.Hooks.useKeyCenter();
    const [conceptData, setConceptData] = Common.Hooks.useConceptData();
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.name);

    return (
        <div className='controller'>

            <div className='viewer'>
                <Summary
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
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

        </div >
    );
}