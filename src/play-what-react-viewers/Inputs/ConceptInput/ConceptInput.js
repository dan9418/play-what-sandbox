import React, { useState } from 'react';
import './ConceptInput.css';
import { DropdownInput } from '../DropdownInput/DropdownInput';
import { Theory, Strategies, Utils } from '../../../play-what/index';

const ROMAN_NUMERALS = [
    {
        id: 'none',
        name: 'None',
    },
    {
        id: '1',
        name: '1',
    },
    {
        id: '2',
        name: '2',
    },
    {
        id: '3',
        name: '3',
    },
    {
        id: '4',
        name: '4',
    },
    {
        id: '5',
        name: '5',
    },
    {
        id: '6',
        name: '6',
    },
    {
        id: '7',
        name: '7',
    }
];

const PRESET_TYPES = [
    {
        id: 'pair',
        name: 'Pair',
        presets: Object.values(Theory.Presets.INTERVAL_PAIR)
    },
    {
        id: 'chord',
        name: 'Chord',
        presets: Object.values(Theory.Presets.CHORD)
    },
    {
        id: 'scale',
        name: 'Scale',
        presets: Object.values(Theory.Presets.SCALE)
    },
    {
        id: 'mode',
        name: 'Mode',
        presets: Object.values(Theory.Presets.MODE)
    }
];

export function ConceptInput(props) {
    const [selectedType, setSelectedType] = useState(PRESET_TYPES[0]);
    const [selectedPreset, setSelectedPreset] = useState(selectedType.presets[0]);
    const [romanNumeral, setRomanNumeral] = useState(ROMAN_NUMERALS[0]);
    return (
        <div className='intervals-input'>
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
                        props.setValue(preset);
                    }}
                />
            </div>

            {props.value instanceof Theory.ConceptTypes.HeptatonicScale &&
                <div className='input-row'>
                    <label>Roman Numeral:</label>
                    <DropdownInput
                        data={ROMAN_NUMERALS}
                        value={romanNumeral}
                        setValue={(rn) => {
                            // Not sure if safe to update both states like this...
                            setRomanNumeral(rn);
                            let newRN = new RomanNumeral(props.concept, parseInt(rn.id))
                            props.setValue(newRN);
                        }}
                    />
                </div>
            }

            {props.value instanceof Theory.ConceptTypes.RomanNumeral &&
                <div className='input-row'>
                    <label>Roman Numeral:</label>
                    <DropdownInput
                        data={ROMAN_NUMERALS}
                        value={romanNumeral}
                        setValue={(rn) => {
                            // Not sure if safe to update both states like this...
                            setRomanNumeral(rn);
                            let newRN = new RomanNumeral(props.concept.sourceScale, parseInt(rn.id))
                            props.setValue(newRN);
                        }}
                    />
                </div>
            }

        </div>
    );
}