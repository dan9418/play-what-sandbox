import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';

import { Fretboard, Keyboard } from './play-what/index';
import { ViewDriver, DEFAULT_FRETBOARD_STATE, DEFAULT_FRETBOARD_INPUTS, DEFAULT_KEYBOARD_STATE, DEFAULT_KEYBOARD_INPUTS } from './play-what-react-viewers/index';

export function App() {
    return (
        <div className='app-container'>
            <ViewDriver viewer={Fretboard} initialState={DEFAULT_FRETBOARD_STATE} inputs={DEFAULT_FRETBOARD_INPUTS} />
            <ViewDriver viewer={Keyboard} initialState={DEFAULT_KEYBOARD_STATE} inputs={DEFAULT_KEYBOARD_INPUTS} />
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);