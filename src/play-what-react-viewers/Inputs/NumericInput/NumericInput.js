import * as React from 'react';
import './NumericInput.css';

export function NumericInput(props) {
    return (
        <input
            type='number'
            className='numeric-input'
            value={props.octave}
            min={props.min}
            max={props.max}
            onChange={(e) => props.setValue(e.target.value)}
        />
    );
}