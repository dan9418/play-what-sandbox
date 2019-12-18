import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';

import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard } from 'play-what-react-viewers';

export function App() {
    return (
        <div className='app-container'>
            <Fretboard></Fretboard>
            <Keyboard></Keyboard>
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);