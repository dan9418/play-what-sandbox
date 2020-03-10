import React, { useState } from 'react';
import './Main.css';
import Common from './Common/_module';
import { Fretboard } from 'play-what-react-viewers';
import NumericInput from 'play-what-react-viewers/src/Inputs/NumericInput/NumericInput';
import PW from 'play-what';

const FRET_LOW = 1;
const FRET_HIGH = 8;

const parseJsong = (sections) => {
    let viewers = [];
    for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        const intervals = s.intervals.map(ivl => PW.Constants.INTERVAL[ivl]);
        const reps = s.repeat ? s.repeat : 1;
        const instances = [...Array(reps)].map((e, r) => (
            <Fretboard.Controller
                key={i + '-' + r}
                fretLow={FRET_LOW}
                fretHigh={FRET_HIGH}
                keyCenter={new PW.KeyCenter(s.keyCenter)}
                concept={new PW.Concept('', '', intervals)}
            />
        ));
        viewers = viewers.concat(instances);
    }
    return viewers;
}

const jsong = {
    bpm: 120,
    timeSignature: [4, 4],
    sections: [
        {
            keyCenter: 'G',
            intervals: ['P1', 'M3', 'P5', 'M7'],
            repeat: 2
        },
        {
            keyCenter: 'Bb',
            intervals: ['P1', 'M3', 'P5', 'm7'],
            repeat: 1
        },
        {
            keyCenter: 'Eb',
            intervals: ['P1', 'M3', 'P5', 'm7'],
            repeat: 1
        }
    ]
};

const Main = () => {

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
                    {parseJsong(jsong.sections)}
                </div>
                {false &&
                    <div className="grid" style={{ gridTemplateColumns: `repeat(${x}, 1fr)`, gridTemplateRows: `repeat(${y}, 1fr)` }}>
                        {/*[...Array(x * y)].map((e, i) => <Fretboard.Controller key={i} />)*/}
                        {/* A1 */}
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.G, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Maj7}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.G, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Maj7}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.B, PW.Constants.ACCIDENTAL.Flat, 3)}
                            concept={PW.Presets.CHORD.Min7}
                            rootString={5}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.E, PW.Constants.ACCIDENTAL.Flat, 3)}
                            concept={PW.Presets.CHORD.Dom7}
                            rootString={5}
                        />
                        {/* A2 */}
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.G, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Maj7}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.G, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Maj7}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.B, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Min7}
                            rootString={5}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.E, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Dom7b9}
                            rootString={5}
                        />
                        {/* B1 */}
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.A, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Min7}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.E, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Dom7b9}
                            rootString={5}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.A, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Min7}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.A, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Min7}
                        />
                        {/* B2 */}
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.E, PW.Constants.ACCIDENTAL.Flat, 3)}
                            concept={PW.Presets.CHORD.Dom7}
                            rootString={5}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.E, PW.Constants.ACCIDENTAL.Flat, 3)}
                            concept={PW.Presets.CHORD.Dom7}
                            rootString={5}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.A, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Min7}
                        />
                        <Fretboard.Controller
                            fretLow={FRET_LOW}
                            fretHigh={FRET_HIGH}
                            keyCenter={new PW.KeyCenter(PW.Constants.TONIC.D, PW.Constants.ACCIDENTAL.Natural, 3)}
                            concept={PW.Presets.CHORD.Dom7}
                            rootString={5}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export default Main;
