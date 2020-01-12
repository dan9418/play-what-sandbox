import * as React from 'react';
import './InputRow.css';

export default function InputRow(props) {
    return (
        <div className='input-row'>
            <div className='label'>
                {props.label}
            </div>
            <div className='content'>{props.children}</div>
        </div>
    );
}