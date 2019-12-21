import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, RomanNumerals, Inputs } from 'play-what-react-viewers';

const DEFAULT_KEY_CENTER = new Theory.KeyCenter(Theory.Constants.TONIC.A, Theory.Constants.ACCIDENTAL.Natural, 3);
const DEFAULT_CONCEPT = Theory.Presets.SCALE.NatualMinor;

export function App() {
    const [keyCenter, setKeyCenter] = React.useState(DEFAULT_KEY_CENTER);
    const [concept, setConcept] = React.useState(DEFAULT_CONCEPT);

    return (
        <div className='app-container'>
            <div>
                <Inputs.KeyCenter
                    keyCenter={keyCenter}
                    setKeyCenter={setKeyCenter}
                />
                <Inputs.Concept
                    concept={concept}
                    setConcept={setConcept}
                />
            </div>
            <div>
                <RomanNumerals.Viewer
                    keyCenter={keyCenter}
                    concept={concept}
                    colorStrategy={Strategies.ColorBy.degree}
                    actionStrategy={Strategies.ActionBy.none}
                />
            </div>
            <div>
                <Fretboard.Viewer
                    fretLow={0}
                    fretHigh={15}
                    showFretNumbers={true}
                    showDots={true}
                    string={
                        { tuning: 16 },   // e
                        { tuning: 11 },   // B
                        { tuning: 7 },    // G
                        { tuning: 2 },    // D
                        { tuning: -3 },   // A
                        { tuning: -8 }    // E
                    }
                    keyCenter={keyCenter}
                    concept={concept}
                    mapStrategy={Strategies.MapBy.pitchClass}
                    noteFilter={(n, v) => v.stringData.number === 5}
                    colorStrategy={Strategies.ColorBy.degree}
                    colorFilter={Strategies.FilterBy.active}
                    labelStrategy={Strategies.LabelBy.interval}
                    labelFilter={Strategies.FilterBy.active}
                    action={Strategies.ActionBy.playSound}
                    actionFilter={Strategies.FilterBy.none}
                />
            </div>
            <div>
                <Keyboard.Viewer
                    keyLow={-12}
                    keyHigh={24}
                    keyCenter={keyCenter}
                    concept={concept}
                    mapStrategy={Strategies.MapBy.pitchClass}
                    noteFilter={Strategies.FilterBy.none}
                    colorStrategy={(note, data) => Strategies.ColorBy.degree(note, data)}
                    colorFilter={Strategies.FilterBy.none}
                    labelStrategy={Strategies.LabelBy.interval}
                    labelFilter={Strategies.FilterBy.none}
                    action={Strategies.ActionBy.playSound}
                    actionFilter={Strategies.FilterBy.none}
                />
            </div>
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);