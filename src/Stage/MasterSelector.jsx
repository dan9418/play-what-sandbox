import React, { useState, useEffect } from 'react';
import './Stage.css';
import Viewers from 'play-what-react-viewers';
import { useRecoilState } from 'recoil';
import { inputModeState, sourceState, INPUT_MODES, positionState } from './State';

const { UI, Modules } = Viewers;
const { ButtonInput, Dropdown } = UI;
const { Concept, Progression, Chart } = Modules;

const MasterSelector = () => {

    const [inputMode, setInputMode] = useRecoilState(inputModeState);
    const [source, setSource] = useRecoilState(sourceState);
    const [position, setPosition] = useRecoilState(positionState)

    const InputModeComponent = inputMode.component;

    return (
        <div className="master-selector">
            <div className="input-mode-selector">
                {INPUT_MODES.map((m, i) => {
                    const onClick = () => {
                        setInputMode(m);
                        setPosition(m.startPosition);
                        setSource(m.presets[0]);
                    };
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
            <div className="source-preset">

            </div>
            <h1>{inputMode.name}</h1>
            <Dropdown value={source} setValue={setSource} options={inputMode.presets} />
            <InputModeComponent source={source} position={position} setPosition={setPosition} />
        </div>
    );
}

export default MasterSelector;
