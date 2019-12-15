import * as ReactDOM from 'react-dom';
import * as React from "react";
import './App.css';

import { Fretboard, Keyboard } from 'play-what-beta';

import { KeyCenter } from './Theory/KeyCenter';
import { TONIC, ACCIDENTAL } from './Theory/Constants/Enums';
import { INTERVAL_PAIR, CHORD, SCALE, MODE } from './Theory/Constants/Presets';

import { ViewDriver } from './Viewers/ViewDriver/ViewDriver';
import { ActionStrategies } from './Theory/Strategies/ActionStrategies'
import { ColorStrategies } from './Theory/Strategies/ColorStrategies'
import { FilterStrategies } from './Theory/Strategies/FilterStrategies'
import { LabelStrategies } from './Theory/Strategies/LabelStrategies'
import { NoteStrategies } from './Theory/Strategies/NoteStrategies'

import { FretboardColorStrategies, FretboardLabelStrategies, FretboardFilterStrategies } from './Viewers/Strategies/FretboardStrategies';
import { KeyboardColorStrategies, KeyboardLabelStrategies } from './Viewers/Strategies/KeyboardStrategies';

const INITIAL_FRETBOARD_STATE = {
    noteStrategy: (noteIndex) => NoteStrategies.getNoteAt(noteIndex, new KeyCenter(TONIC.C, ACCIDENTAL.Natural, 4), CHORD.Maj7),
    colorStrategy: FretboardColorStrategies.degree,
    actionStrategy: ActionStrategies.sound,
    labelStrategy: FretboardLabelStrategies.interval
}
const INITIAL_KEYBOARD_STATE = {
    noteStrategy: (noteIndex) => NoteStrategies.getNoteAt(noteIndex, new KeyCenter(TONIC.C, ACCIDENTAL.Natural, 4), CHORD.Maj7),
    colorStrategy: KeyboardColorStrategies.degree,
    actionStrategy: ActionStrategies.sound,
    labelStrategy: KeyboardLabelStrategies.interval
}

export function App() {
    return (
        <div className='app-container'>
            <ViewDriver viewer={Fretboard} initialState={INITIAL_FRETBOARD_STATE} />
            <ViewDriver viewer={Keyboard} initialState={INITIAL_KEYBOARD_STATE} />
        </div>
    );
}


const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);