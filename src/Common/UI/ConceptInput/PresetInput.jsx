import React, { useState } from 'react';
import './PresetInput.css';

import PW from 'play-what';
import Dropdown from '../Dropdown/Dropdown';

const PRESET_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        options: PW.Presets.INTERVAL_PAIR_VALUES
    },
    {
        id: 'chord',
        name: 'Chord',
        options: PW.Presets.CHORD_VALUES
    },
    {
        id: 'scale',
        name: 'Scale',
        options: PW.Presets.SCALE_VALUES
    }
];

const PresetInput = props => {
    const { value, setValue } = props;

    const [presetType, setPresetType] = useState(PRESET_TYPES[1]);

    const SpecificInput = presetType.component;

    return (
        <div className='preset-input'>
            <label>Preset:</label>
            <Dropdown value={presetType} setValue={setPresetType} options={PRESET_TYPES} />
            <label>{presetType.name}:</label>
            <Dropdown value={null} setValue={v => setValue(v.intervals)} options={presetType.options} />
        </div>
    );
}

export default PresetInput;