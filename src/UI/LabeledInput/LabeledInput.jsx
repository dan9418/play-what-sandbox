import React, { useState } from 'react';
import './LabeledInput.css';
import PW from 'play-what';

const LabeledInput = props => {
    return (
        <div className="labeled-input">
            <label>
                {props.label}
            </label>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default LabeledInput;