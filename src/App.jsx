import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Keyboard, RomanNumerals, Inputs, ViewController } from 'play-what-react-viewers';
import CAGED from './CAGED';

const PARENT = {
    id: 'common',
    name: 'Common',
    defaults: {
        // theory
        keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
        concept: Theory.Presets.CHORD.Maj7,
        // notes
        mapStrategy: Strategies.MapBy.noteIndex,
        noteFilter: () => true,
        // labels
        labelStrategy: Strategies.LabelBy.interval,
        labelFilter: () => true,
        // colors
        colorStrategy: Strategies.ColorBy.degree,
        colorFilter: () => true,
        // actions
        actionStrategy: Strategies.ActionBy.playSound,
        actionFilter: () => true
    },
    inputs: [
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
                data: Object.values(Strategies.ColorBy)
            },
        },
        {
            id: 'labelStrategy',
            component: Inputs.DropdownInput,
            name: 'Label Strategy',
            props: {
                data: Object.values(Strategies.LabelBy)
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
    ],
    outputs: [
        {
            id: 'summary',
            name: 'Summary',
            component: RomanNumerals.Viewer
        }
    ],
    children: [
        {
            id: 'fretboard',
            name: 'Fretboard',
            defaults: {
                fretLow: 0,
                fretHigh: 12,
                showDots: true,
                showFretNumbers: true
            },
            inputs: [
                {
                    id: 'fretLow',
                    name: 'Low Fret',
                    component: Inputs.NumericInput
                },
                {
                    id: 'fretHigh',
                    name: 'High Fret',
                    component: Inputs.NumericInput
                },
                {
                    id: 'showDots',
                    name: 'Show Dots',
                    component: Inputs.SwitchInput
                },
                {
                    id: 'showFretNumbers',
                    name: 'Show Fret Numbers',
                    component: Inputs.SwitchInput
                }
            ],
            outputs: [
                {
                    id: 'guitar',
                    name: 'Guitar',
                    component: Fretboard.Viewer
                }
            ]
        },
        {
            id: 'keyboard',
            name: 'Keyboard',
            defaults: Keyboard.Defaults,
            inputs: [
                {
                    id: 'keyLow',
                    name: 'Low Key',
                    component: Inputs.NumericInput
                },
                {
                    id: 'keyHigh',
                    name: 'High Key',
                    component: Inputs.NumericInput
                }
            ],
            outputs: [
                {
                    id: 'piano',
                    name: 'Piano',
                    component: Keyboard.Viewer
                }
            ]
        }
    ]
};

export function App() {
    return (
        <div className='app-container'>
            {/*<ViewController {...PARENT} />*/}
            {<CAGED />}
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);