import React, { useState } from 'react';
import PlayWhat from 'play-what';
import { Keyboard } from 'play-what-react-viewers';

import Common from '../../Common/_module';
import * as Sections from './Sections';

export default function KeyboardController() {

    const [keyCenter, setKeyCenter] = Common.Hooks.useKeyCenter();
    const [conceptData, setConceptData] = Common.Hooks.useConceptData();
    const [keyLow, setKeyLow] = useState(0);
    const [keyHigh, setKeyHigh] = useState(24);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelBy.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.noteIndex);

    return (
        <div className='controller'>
            <div className='viewer'>
                <Keyboard.Viewer
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    keyLow={keyLow}
                    keyHigh={keyHigh}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                    mapStrategy={mapStrategy}
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

            <Sections.Range
                keyLow={keyLow}
                setKeyLow={setKeyLow}
                keyHigh={keyHigh}
                setKeyHigh={setKeyHigh}
            />

            <Sections.Color
                colorStrategy={colorStrategy}
                setColorStrategy={setColorStrategy}
            />

            <Sections.Label
                labelStrategy={labelStrategy}
                setLabelStrategy={setLabelStrategy}
            />

            <Sections.Filter
                mapStrategy={mapStrategy}
                setMapStrategy={setMapStrategy}
            />
        </div>
    );

}