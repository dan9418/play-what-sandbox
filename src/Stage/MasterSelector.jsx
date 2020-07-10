import React, { useState, useEffect } from 'react';
import './Stage.css';
import Viewers from 'play-what-react-viewers';
import { useRecoilState } from 'recoil';
import { inputModeSelector, sourceState, INPUT_MODES, positionState, conceptState, aState, BState } from './State';
import { useRecoilValue } from 'recoil';

const { UI, Modules } = Viewers;
const { ButtonInput, Dropdown } = UI;
const { Chart } = Modules;

const MasterSelector = () => {

    const [inputMode, setInputMode] = useRecoilState(inputModeSelector);
    const [source, setSource] = useRecoilState(sourceState);
    //const setA = useSetRecoilState(aState);
    //const setB = useSetRecoilState(BState);
    const concept = useRecoilValue(conceptState);
    const [position, setPosition] = useRecoilState(positionState);

    console.log(source, concept);

    const setSourceSafe = src => setSource({ a: { p: 0, d: 0 }, ...src })

    return (
        <div className="master-selector">
            <div className="source-preset">
                <Dropdown value={source} setValue={setSourceSafe} options={inputMode.presets} />
            </div>
            <Chart source={source} position={position} setPosition={setPosition} inputModeId={inputMode.id}/>
        </div>
    );
}

export default MasterSelector;
