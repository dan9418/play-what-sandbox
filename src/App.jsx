import * as ReactDOM from 'react-dom';
import * as React from "react";
import './App.css';

import {
    Fretboard,
    Keyboard,
    KeyCenter,
    TONIC,
    ACCIDENTAL,
    INTERVAL_PAIR,
    CHORD,
    SCALE,
    MODE,
    ActionStrategies,
    ColorStrategies,
    FilterStrategies,
    LabelStrategies,
    NoteStrategies
} from './play-what/index';

import {
    ViewDriver,
    FretboardColorStrategies,
    FretboardLabelStrategies,
    FretboardFilterStrategies,
    KeyboardColorStrategies,
    KeyboardLabelStrategies
} from './play-what-react-viewers/index';

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