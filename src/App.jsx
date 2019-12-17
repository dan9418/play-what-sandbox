import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';

import { Theory, Strategies, Utils } from 'play-what';

export function App() {
    console.log(Theory, Strategies, Utils)
    return (
        <div className='app-container'>
            {/*
            <Fretboard></Fretboard>
            <Keyboard></Keyboard>
            */}
            Testing
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);