import React from 'react';
import './Menu.css';
import Dropdown from '../UI/Dropdown/Dropdown';

import { useRecoilState } from 'recoil';
import { sourceSelector, zoomLevelSelector, PRESETS } from '../Common/State';
import { useRecoilValue } from 'recoil';

const PresetSelector = ({ level, children }) => {

    const zoomLevel = useRecoilValue(zoomLevelSelector);
    const [source, setSource] = useRecoilState(sourceSelector);
    const setSourceSafe = src => setSource({ a: { p: 0, d: 0 }, ...src })

    return <div className="preset-selector">
        <Dropdown value={source} setValue={setSourceSafe} options={PRESETS[zoomLevel]} />
    </div>
}

export default PresetSelector;