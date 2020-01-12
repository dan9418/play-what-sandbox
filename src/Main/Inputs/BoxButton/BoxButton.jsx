import * as React from 'react';
import './BoxButton.css';

export default function BoxButton(props) {
    let classes = ['box-button', props.selected ? 'selected' : ''];
    return (
        <div
            className={classes.join(' ')}
            onClick={props.action}
        >
            {props.text}
        </div>
    );
}