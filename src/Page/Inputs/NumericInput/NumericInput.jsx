import * as React from 'react';
import './NumericInput.css';
import BoxButton from '../BoxButton/BoxButton';

export default function NumericInput(props) {
    return (
        <div
            className='numeric-input'
        >
            <BoxButton className='down' text={'-'} selected={false} action={() => props.setValue(props.value - 1)} />
            <BoxButton className='value' text={props.value} selected={true} action={() => null} />
            <BoxButton className='up' text={'+'} selected={false} action={() => props.setValue(props.value + 1)} />
        </div>
    );
}