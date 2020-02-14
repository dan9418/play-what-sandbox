import React, { useState } from 'react';
import PlayWhat from 'play-what';
import { Fretboard } from 'play-what-react-viewers';

import Common from '../../Common/_module';
import * as Sections from './Sections';

export default function FretboardController(props) {

    const [configOpen, setConfigOpen] = useState(false);

    const [keyCenter, setKeyCenter] = Common.Hooks.useKeyCenter();
    const [conceptData, setConceptData] = Common.Hooks.useConceptData();
    const [fretLow, setFretLow] = useState(7);
    const [fretHigh, setFretHigh] = useState(10);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [strings, setStrings] = useState(Fretboard.Defaults.strings);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelUtils.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.pitchClass);

    return (
        <div className='controller'>

            <div className='viewer'>
                <Fretboard.Viewer
                    fretLow={fretLow}
                    fretHigh={fretHigh}
                    showDots={showDots}
                    showFretNumbers={showFretNumbers}
                    strings={strings}

                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                    mapStrategy={mapStrategy}
                />
            </div>

            {configOpen && <>

                <Common.Sections.KeyCenter
                    keyCenter={keyCenter}
                    setKeyCenter={setKeyCenter}
                />

                <Common.Sections.Concept
                    conceptData={conceptData}
                    setConceptData={setConceptData}
                />

                <Sections.Range
                    fretLow={fretLow}
                    setFretLow={setFretLow}
                    fretHigh={fretHigh}
                    setFretHigh={setFretHigh}
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

                <Sections.Tuning
                    strings={strings}
                    setStrings={setStrings}
                />

            </>}

        </div>
    );

}