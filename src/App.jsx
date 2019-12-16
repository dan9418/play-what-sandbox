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
    MappingStrategies
} from './play-what/index';

import {
    ViewDriver,
    FretboardColorStrategies,
    FretboardLabelStrategies,
    FretboardFilterStrategies,
    KeyboardColorStrategies,
    KeyboardLabelStrategies,
    StrategyInput
} from './play-what-react-viewers/index';
import { KeyCenterInput } from './play-what-react-viewers/Inputs/KeyCenterInput/KeyCenterInput';
import { ConceptInput } from './play-what-react-viewers/Inputs/ConceptInput/ConceptInput';
import { DropdownInput } from './play-what-react-viewers/Inputs/DropdownInput/DropdownInput';

const INITIAL_FRETBOARD_STATE = {
    keyCenter:  new KeyCenter(TONIC.C, ACCIDENTAL.Natural, 4),
    concept: CHORD.Maj7,
    mappingStrategy: MappingStrategies.getNoteByNoteIndex,
    colorStrategy: FretboardColorStrategies.degree,
    actionStrategy: ActionStrategies.sound,
    labelStrategy: FretboardLabelStrategies.interval
}
const INITIAL_KEYBOARD_STATE = {
    keyCenter:  new KeyCenter(TONIC.C, ACCIDENTAL.Natural, 4),
    concept: CHORD.Maj7,
    mappingStrategy: MappingStrategies.getNoteByNoteIndex,
    colorStrategy: KeyboardColorStrategies.degree,
    actionStrategy: ActionStrategies.sound,
    labelStrategy: KeyboardLabelStrategies.interval
}

const FRETBOARD_INPUTS = [
    {
        id: 'keyCenter',
        name: 'Key Center',
        component: KeyCenterInput
    },
    {
        id: 'concept',
        name: 'Concept',
        component: ConceptInput
    },
    {
        id: 'mappingStrategy',
        name: 'Mapping Strategy',
        component: StrategyInput,
        props: {
            data: [
                {
                    id: 'noteIndex',
                    name: 'Note Index',
                    fx: MappingStrategies.getNoteByNoteIndex
                },
                {
                    id: 'pitchClass',
                    name: 'Pitch Class',
                    fx: MappingStrategies.getNoteByPitchClass
                }
            ]
        }
    }
]

export function App() {
    return (
        <div className='app-container'>
            <ViewDriver viewer={Fretboard} initialState={INITIAL_FRETBOARD_STATE} inputs={FRETBOARD_INPUTS} />
            <ViewDriver viewer={Keyboard} initialState={INITIAL_KEYBOARD_STATE} />
        </div>
    );
}


const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);