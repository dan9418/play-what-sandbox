import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, RomanNumerals, Inputs, ViewController } from 'play-what-react-viewers';

const FRETBOARD_INPUTS = [
    {
        id: 'keyCenter',
        name: 'Key Center',
        component: Inputs.KeyCenter
    },
    {
        id: 'concept',
        name: 'Concept',
        component: Inputs.Concept
    },
    {
        id: 'colorStrategy',
        component: Inputs.DropdownInput,
        name: 'Color Strategy',
        props: {
            data: Object.values(Fretboard.Strategies.ColorBy)
        },
    },
    {
        id: 'labelStrategy',
        component: Inputs.DropdownInput,
        name: 'Label Strategy',
        props: {
            data: Object.values(Fretboard.Strategies.LabelBy)
        },
    },
    {
        id: 'mapStrategy',
        component: Inputs.DropdownInput,
        name: 'Map Strategy',
        props: {
            data: Object.values(Strategies.MapBy)
        },
    }
];

const KEYBOARD_INPUTS = [
    {
        id: 'keyCenter',
        name: 'Key Center',
        component: Inputs.KeyCenter
    },
    {
        id: 'concept',
        name: 'Concept',
        component: Inputs.Concept
    },
    {
        id: 'colorStrategy',
        component: Inputs.DropdownInput,
        name: 'Color Strategy',
        props: {
            data: Object.values(Keyboard.Strategies.ColorBy)
        },
    },
    {
        id: 'labelStrategy',
        component: Inputs.DropdownInput,
        name: 'Label Strategy',
        props: {
            data: Object.values(Keyboard.Strategies.LabelBy)
        },
    },
    {
        id: 'mapStrategy',
        component: Inputs.DropdownInput,
        name: 'Map Strategy',
        props: {
            data: Object.values(Strategies.MapBy)
        },
    }
];

export function App() {
    return (
        <div className='app-container'>
            <ViewController
                viewer={Fretboard.Viewer}
                defaults={Fretboard.Defaults}
                inputs={FRETBOARD_INPUTS}
            />
            <ViewController
                viewer={Keyboard.Viewer}
                defaults={Keyboard.Defaults}
                inputs={KEYBOARD_INPUTS}
            />
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);