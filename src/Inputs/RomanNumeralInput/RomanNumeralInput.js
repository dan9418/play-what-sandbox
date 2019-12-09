import React from 'react';
import './RomanNumeralInput.css';
import { DropdownInput } from '../DropdownInput/DropdownInput';

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

export function RomanNumeralInput(props) {
    return (
        <div className='intervals-input'>
            <div className='input-title'>
                Roman Numeral
            </div>

            <div className='input-row'>
                <label>Roman Numeral:</label>
                <DropdownInput
                    data={ROMAN_NUMERALS}
                    value={props.romanNumeral}
                    setValue={(rn) => props.setRomanNumeral(rn)}
                />
            </div>
        </div>
    );
}