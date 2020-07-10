import React, { useState, useEffect } from 'react';
import './Stage.css';
import Viewers from 'play-what-react-viewers';
import { useRecoilState } from 'recoil';
import { inputModeSelector, sourceState, INPUT_MODES, positionState, conceptState, aState, BState } from './State';
import { useRecoilValue } from 'recoil';
import PlaybackControls from '../PlaybackControls/PlaybackControls';

const { UI, Modules } = Viewers;
const { ButtonInput, Dropdown } = UI;
const { Chart } = Modules;

const MasterSelector = () => {

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const [inputMode, setInputMode] = useRecoilState(inputModeSelector);
    const [source, setSource] = useRecoilState(sourceState);
    //const setA = useSetRecoilState(aState);
    //const setB = useSetRecoilState(BState);
    const concept = useRecoilValue(conceptState);
    const [position, setPosition] = useRecoilState(positionState);

    console.log(source, concept);

    const setSourceSafe = src => setSource({ a: { p: 0, d: 0 }, ...src })

    return (
        <div className={`menu pw-lighter ${open && 'open'}`}>
            {open &&
                <>
                    <div className="source-preset">
                        <Dropdown value={source} setValue={setSourceSafe} options={inputMode.presets} />
                    </div>
                    <PlaybackControls />
                    <Chart source={source} position={position} setPosition={setPosition} inputModeId={inputMode.id} />
                </>
            }
            <div className={`tab pw-lighter pw-medium pw-hov`} onClick={toggleOpen} >{open ? '<' : '>'}</div>
        </div>
    );
}

export default MasterSelector;
