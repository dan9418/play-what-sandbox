import React from 'react';
//import './PresetInput.css';

import PW from 'play-what';
import Dropdown from '../Dropdown/Dropdown';
const Theory = PW.v2.TheoryNew;
const Constants = PW.v2.ConstantsNew;
const Presets = PW.v2.PresetsNew;

const PRESET_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair'
    },
    {
        id: 'chord',
        name: 'Chord'
    },
    {
        id: 'scale',
        name: 'Scale'
    }
];

const PresetInput = props => {
    const { value, setValue } = props;

    return (
        <div className='preset-input'>
            <label>Preset:</label>
            <Dropdown value={value} setValue={setValue} options={PRESET_TYPES} />
        </div>
    );
}

export default PresetInput;