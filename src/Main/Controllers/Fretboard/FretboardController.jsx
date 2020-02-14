import React, { useState } from 'react';
import PlayWhat from 'play-what';
import { Fretboard } from 'play-what-react-viewers';

import Common from '../../Common/_module';
import * as Sections from './Sections';

export default function FretboardController(props) {

    const [configOpen, setConfigOpen] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragStartWidth, setDragStartWidth] = useState(300);
    const [width, setWidth] = useState(300);

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

    const onDragStart = e => {
        setDragStartX(e.pageX);
        setDragStartWidth(width);
    };
    
    const resize = e => {
        let distance = e.pageX - dragStartX;
        setWidth(dragStartWidth + distance);
    };

    const onDragEnd = e => {
        let distance = e.pageX - dragStartX;
        setWidth(dragStartWidth + distance);
        setDragStartX(0);
        setDragStartWidth(0);
    };

    return (
        <div className='controller'>

            <div className='title'>Fretboard</div>

            <div className='viewer'>
                <div className='sizer left' draggable={true} onDragStart={onDragStart} onDrag={resize} onDragEnd={onDragEnd}/>
                <div className='viewer-sizer' style={{width: width}}>
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
                <div className='sizer right' draggable={true} onDragStart={onDragStart} onDrag={resize} onDragEnd={onDragEnd}/>
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