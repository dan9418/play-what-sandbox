import React, { useState } from 'react';
import './Main.css';
import Common from './Common/_module';
import { Fretboard } from 'play-what-react-viewers';
import NumericInput from 'play-what-react-viewers/src/Inputs/NumericInput/NumericInput';
import PW from 'play-what';
import * as Songs from './Songs';

const FRET_LOW = 1;
const FRET_HIGH = 8;

const parseJsong = (sections) => {
    let viewers = [];
    for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        //const intervals = s.intervals.map(ivl => typeof ivl === 'object' ? ivl : PW.Constants.INTERVAL[ivl]);
        //const concept = new PW.Concept('', '', intervals);
        const reps = s.repeat ? s.repeat : 1;
        const instances = [...Array(reps)].map((e, r) => (
            <Fretboard.Controller
                key={i + '-' + r}
                fretLow={typeof s.fretLow !== 'undefined' ? s.fretLow : FRET_LOW}
                fretHigh={typeof s.fretHigh !== 'undefined' ? s.fretHigh : FRET_HIGH}
                keyCenter={new PW.KeyCenter(s.keyCenter)}
                concept={s.concept}
                colorStrategy={s.colorStrategy}
            />
        ));
        viewers = viewers.concat(instances);
    }
    return viewers;
}

const Main = () => {

    const song = Songs.AUTUMN_LEAVES.sections;

    const [x, setX] = useState(2);
    const [y, setY] = useState(4);

    return (
        <div className='controller-manager'>
            <div className="top-nav">
                <div className="link"><Common.Icons.GitHub /></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu /></div>
            </div>
            <div className="stage-controller">
                <div className="grid-input-container">
                    <div className="text">Grid:</div>
                    <NumericInput value={x} setValue={setX} />
                    <div className="text">x</div>
                    <NumericInput value={y} setValue={setY} />
                </div>
            </div>
            <div className="stage">
                <div className="grid" style={{ gridTemplateColumns: `repeat(${x}, 1fr)`, gridTemplateRows: `repeat(${y}, 1fr)` }}>
                    {parseJsong(song)}
                </div>
            </div>
        </div>
    );
}

export default Main;
