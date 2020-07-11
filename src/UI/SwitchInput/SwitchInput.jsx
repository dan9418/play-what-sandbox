import * as React from 'react';
import './SwitchInput.css';

export default function SwitchInput(props) {
    let classes = ['switch-input', props.value ? 'pw-accent' : ''];
    return (
        <div className={classes.join(' ')} onClick={() => props.setValue(!props.value)}>
            <div className='ball' />
        </div>
    );
}