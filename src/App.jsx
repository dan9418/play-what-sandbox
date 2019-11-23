import * as ReactDOM from 'react-dom';
import * as React from "react";
import { ViewDriver } from "./ViewDriver";
import { TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { useState } from "react";

export function App(props) {
    return (
        <div className='play-what-demo'>
            <ViewDriver viewer={Keyboard}/>
            <ViewDriver viewer={Fretboard}/>
        </div>
    );
}


const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);