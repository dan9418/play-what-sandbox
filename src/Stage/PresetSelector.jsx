import React from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
const { UI, Modules } = Viewers;
const { ButtonInput, Dropdown } = UI;
const { Chart } = Modules;

import { useRecoilState } from 'recoil';
import { sourceState, inputModeSelector } from './State';
import { useRecoilValue } from 'recoil';

const PresetSelector = ({ level, children }) => {

    const inputMode = useRecoilValue(inputModeSelector);
    const [source, setSource] = useRecoilState(sourceState);
    const setSourceSafe = src => setSource({ a: { p: 0, d: 0 }, ...src })

    return <div className="preset-selector">
        <Dropdown value={source} setValue={setSourceSafe} options={inputMode.presets} />
    </div>
}

export default PresetSelector;