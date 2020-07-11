import React, { useState } from 'react';
import './PresetInput.css';

import PW from 'play-what';
import Dropdown from '../Dropdown/Dropdown';
import LabeledInput from '../LabeledInput/LabeledInput';

const UKNOWN_PRESET = {
    id: 'unknown',
    name: 'Unknown',
    intervals: []
};

const PRESET_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        options: [...PW.Presets.INTERVAL_PAIR_VALUES, UKNOWN_PRESET]
    },
    {
        id: 'chord',
        name: 'Chord',
        options: [...PW.Presets.CHORD_VALUES, UKNOWN_PRESET]
    },
    {
        id: 'scale',
        name: 'Scale',
        options: [...PW.Presets.SCALE_VALUES, UKNOWN_PRESET]
    },
    {
        id: 'mode',
        name: 'Mode',
        options: [...PW.Presets.QUICK_MODE_VALUES, UKNOWN_PRESET]
    }
];

const PresetInput = props => {
    const { preset, setPreset } = props;

    const [presetType, setPresetType] = useState(PRESET_TYPES[1]);

    const SpecificInput = presetType.component;

    return (
        <div className='preset-input pw-input-block'>
            <LabeledInput label="Preset Type">
                <Dropdown value={presetType} setValue={setPresetType} options={PRESET_TYPES} />
            </LabeledInput>
            <LabeledInput label={presetType.name} >
                <Dropdown value={preset} setValue={v => setPreset(v.B)} options={presetType.options} />
            </LabeledInput>
        </div>
    );
}

export default PresetInput;