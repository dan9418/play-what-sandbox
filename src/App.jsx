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
                <Fretboard.Controller />
            </div>
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);