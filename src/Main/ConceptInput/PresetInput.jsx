import React from 'react';
import './ConceptInput.css';

import PW from 'play-what';
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

const ConceptInput = props => {
    const { value, setValue } = props;

    return (
        <div className='preset-input'>
            <label>Preset:</label>
            
        </div>
    );
}

export default ConceptInput;