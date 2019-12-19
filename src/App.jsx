import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard } from 'play-what-react-viewers';

export function App() {
    return (
        <div className='app-container'>
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
                keyCenter={new Theory.KeyCenter(Theory.Constants.TONIC.E, Theory.Constants.ACCIDENTAL.Natural, 3)}
                concept={Theory.Presets.SCALE.Major}
                mapStrategy={Strategies.MapBy.pitchClass}
                noteFilter={Fretboard.Strategies.FilterBy.voicing}
                colorStrategy={Strategies.ColorBy.pitchClass}
                colorFilter={Strategies.FilterBy.active}
                labelStrategy={Strategies.LabelBy.interval}
                labelFilter={Strategies.FilterBy.active}
                action={Strategies.ActionBy.playSound}
                actionFilter={Strategies.FilterBy.none}
            />
            <Keyboard.Viewer
                keyLow={-12}
                keyHigh={24}
                keyCenter={new Theory.KeyCenter(Theory.Constants.TONIC.E, Theory.Constants.ACCIDENTAL.Natural, 3)}
                concept={Theory.Presets.SCALE.Major}
                mapStrategy={Strategies.MapBy.pitchClass}
                noteFilter={Strategies.FilterBy.none}
                colorStrategy={(note, data) => Strategies.ColorBy.frequency(note, data, ['#123456', '#654321'])}
                colorFilter={Strategies.FilterBy.none}
                labelStrategy={Strategies.LabelBy.interval}
                labelFilter={Strategies.FilterBy.none}
                action={Strategies.ActionBy.playSound}
                actionFilter={Strategies.FilterBy.none}
            />
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);