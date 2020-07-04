import React, { useState, useEffect } from 'react';
import './Stage.css';
import Viewers from 'play-what-react-viewers';
import { useRecoilState } from 'recoil';
import { inputModeSelector, sourceState, INPUT_MODES, positionState, conceptState, aState, BState } from './State';
import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
import ConceptPreview from './ConceptPreview';

const { UI, Modules } = Viewers;
const { ButtonInput, Dropdown } = UI;
const { Concept, Progression, Chart } = Modules;

const MasterSelector = () => {

    const [inputMode, setInputMode] = useRecoilState(inputModeSelector);
    const [source, setSource] = useRecoilState(sourceState);
    const setA = useSetRecoilState(aState);
    const setB = useSetRecoilState(BState);
    const concept = useRecoilValue(conceptState);
    const [position, setPosition] = useRecoilState(positionState);

    const InputModeComponent = inputMode.component;

    console.log(source, concept);

    return (
        <div className="master-selector">
            <div className="input-mode-selector">
                {INPUT_MODES.map((m, i) => {
                    return (
                        <ButtonInput
                            key={i}
                            onClick={() => setInputMode(m)}
                            className={inputMode.id === m.id ? 'pw-accent' : 'pw-secondary'}>
                            {`${m.label} ${m.name}`}
                        </ButtonInput>
                    );
                })}
            </div>
            <div className="source-preset">
                <Dropdown value={source} setValue={setB} options={inputMode.presets} />
            </div>
            <div className="concept-preview">
                <ConceptPreview />
            </div>
            {inputMode.id !== 'concept' &&
                <InputModeComponent source={source} position={position} setPosition={setPosition} />
            }
        </div>
    );
}

export default MasterSelector;
