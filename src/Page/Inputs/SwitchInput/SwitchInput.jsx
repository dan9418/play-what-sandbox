import * as React from 'react';
import './SwitchInput.css';
import BoxButton from '../BoxButton/BoxButton';

export default function SwitchInput(props) {
    let classes = ['switch-input', props.value ? 'true' : 'false'];
    return (
        <div className={classes.join(' ')}>
            <div className='shell' onClick={() => props.setValue(!props.value)}>
                <div className='ball' />
            </div>
        </div>
    );
}