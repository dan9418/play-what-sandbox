import React, { useState } from 'react';
import './Stage.css';
import Viewers from 'play-what-react-viewers';

const { UI, Modules } = Viewers;
const { ButtonInput, ConceptInput } = UI;
const { Chart } = Modules;

const INPUT_MODES = [
    {
        id: 'concept',
        name: 'Concept',
        label: '•',
        component: ConceptInput
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••',
        component: ConceptInput
    },
    {
        id: 'chart',
        name: 'Chart',
        label: '••••',
        component: Chart
    }
];

const Stage = () => {

    const [inputMode, setInputMode] = useState(INPUT_MODES[2]);

    const InputModeComponent = inputMode.component;

    return (
        <div className="stage pw-light" id="stage">
            <h1>Play What?</h1>
            <p>Play What is a JavaScript library for musical concepts. More info TBA...</p>
            <div className="input-mode-selector">
                {INPUT_MODES.map((m, i) => <ButtonInput key={i} onClick={() => setInputMode(m)} className={inputMode.id === m.id ? 'pw-accent' : 'pw-secondary'}>{m.label}</ButtonInput>)}
            </div>
            <hr />
            <InputModeComponent />
        </div>
    );
}

export default Stage;
