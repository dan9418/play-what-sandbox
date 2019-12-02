import * as ReactDOM from 'react-dom';
import * as React from "react";
import ViewDriver from "./ViewDriver/ViewDriver";
import { TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';

export function App() {
    return (
        <Provider store={store}>
            <div className='app-container'>
                <ViewDriver />
            </div>
        </Provider>
    );
}


const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);