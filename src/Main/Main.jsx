import React, { useState } from 'react';
import './Main.css';
import Common from './Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';
import * as Songs from './Songs';

const Fretboard = Viewers.v1.Fretboard;
const NumericInput = Viewers.v1.Inputs.NumericInput;

const FRET_LOW = 1;
const FRET_HIGH = 7;

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
                labelStrategy={s.labelStrategy}
                actionStrategy={s.actionStrategy}
                mapStrategy={s.mapStrategy}
            />
        ));
        viewers = viewers.concat(instances);
    }
    return viewers;
}

const TEST = {
    strategy: 'NOTES_FROM_INTERVALS',
    args: {
        keyCenter: 'G4',
        intervals: {
            strategy: 'SCALE',
            args: {
                preset: 'Major'
            }
        }
    }
}

const Main = () => {

    const song = Songs.G_MAJOR_SCALE.sections;

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
                <pre>
                    {JSON.stringify(PW.v2.parse(TEST), null, '\t')}
                </pre>
                <div className="grid" style={{ gridTemplateColumns: `repeat(${x}, 1fr)`, gridTemplateRows: `repeat(${y}, 1fr)` }}>
                    {parseJsong(song)}
                </div>
            </div>
        </div>
    );
}

export default Main;
