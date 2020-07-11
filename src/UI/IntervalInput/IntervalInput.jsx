import React from 'react';
import './IntervalInput.css';

import PW from 'play-what';
import Dropdown from '../Dropdown/Dropdown';

const CUSTOM_INTERVAL = {
    id: 'custom',
    name: 'Custom',
    p: 0,
    d: 0
};

const DATA = [...PW.Presets.INTERVALS_VALUES, CUSTOM_INTERVAL];

const areIntervalsEqual = (a, b) => a.p === b.p && a.d === b.d;

const findPreset = interval => {
    const preset = PW.Presets.INTERVALS_VALUES.find(p => areIntervalsEqual(interval, p));
    return preset ? preset : { ...CUSTOM_INTERVAL, p: preset.p, d: preset.d };
}

const IntervalInput = props => {
    const namedInterval = findPreset(props.interval);

    const disabled = typeof value === 'undefined' || typeof value === null;

    return (
        <Dropdown options={DATA} disabled={disabled} value={namedInterval} setValue={props.setInterval} displayProperty='id' />
    );
}

export default IntervalInput;
