import React, { useState, useEffect } from 'react';
import './Stage.css';
import Viewers from 'play-what-react-viewers';
import AUTUMN_LEAVES from '../Common/AutumnLeaves';

const { UI, Modules } = Viewers;
const { ButtonInput } = UI;
const { Concept, Progression, Chart } = Modules;

const INPUT_MODES = [
    {
        id: 'concept',
        name: 'Concept',
        label: '•',
        component: Concept,
        presets: [AUTUMN_LEAVES.sections[0].rows[0].cols[0]]
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••',
        component: Progression,
        presets: [AUTUMN_LEAVES.sections[0].rows[0].cols[0]]
    },
    {
        id: 'chart',
        name: 'Chart',
        label: '••••',
        component: Chart,
        presets: [AUTUMN_LEAVES]
    }
];

const MasterSelector = () => {

    const [inputMode, setInputMode] = useState(INPUT_MODES[2]);

    const [source, setSource] = useState(inputMode.presets[0]);

    const InputModeComponent = inputMode.component;

    return (
        <div className="master-selectot">
            <div className="input-mode-selector">
                {INPUT_MODES.map((m, i) => {
                    const onClick = () => {
                        setSource(m.presets[0]);
                        setInputMode(m);
                    }
                    return (
                        <ButtonInput
                            key={i}
                            onClick={onClick}
                            className={inputMode.id === m.id ? 'pw-accent' : 'pw-secondary'}>
                            {m.label}
                        </ButtonInput>
                    );
                })}
            </div>
            <h1>{source.name}</h1>
            <InputModeComponent source={source} />
        </div>
    );
}

export default MasterSelector;
