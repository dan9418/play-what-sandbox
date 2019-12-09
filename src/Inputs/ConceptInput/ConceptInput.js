import React, { useState } from 'react';
import './ConceptInput.css';
import { DropdownInput } from '../DropdownInput/DropdownInput';
import { INTERVAL_PAIR, CHORD, SCALE, MODE } from '../../Theory/Constants/Presets';

const PRESET_TYPES = [
    {
        id: 'pair',
        name: 'Pair',
        presets: Object.values(INTERVAL_PAIR)
    },
    {
        id: 'chord',
        name: 'Chord',
        presets: Object.values(CHORD)
    },
    {
        id: 'scale',
        name: 'Scale',
        presets: Object.values(SCALE)
    },
    {
        id: 'mode',
        name: 'Mode',
        presets: Object.values(MODE)
    }
];

export function ConceptInput(props) {
    const [selectedType, setSelectedType] = useState(PRESET_TYPES[0]);
    const [selectedPreset, setSelectedPreset] = useState(selectedType.presets[0]);
    return (
        <div className='intervals-input'>
            <div className='input-title'>
                Intervals
            </div>

            <div className='input-row'>
                <label>Preset Type:</label>
                <DropdownInput
                    data={PRESET_TYPES}
                    value={selectedType}
                    setValue={setSelectedType}
                />
            </div>
            
            <div className='input-row'>
                <label>{selectedType.name}:</label>
                <DropdownInput
                    data={selectedType.presets}
                    value={selectedPreset}
                    setValue={(preset) => {
                        // Not sure if safe to update both states like this...
                        setSelectedPreset(preset);
                        props.setConcept(preset);
                    }}
                />
            </div>
        </div>
    );
}