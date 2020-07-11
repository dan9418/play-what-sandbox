import React, { useState } from 'react';
import './InputBlock.css';
import PW from 'play-what';

const InputBlock = props => {
    const [open, setOpen] = useState(true);

    return (
        <div className={`input-block ${props.x ? 'x' : ''}`}>
            <div className="title pw-hov" onClick={() => setOpen(!open)}>
                {props.title}
                <div>{open ? '-' : '+'}</div>
            </div>
            <div className="content pw-lighter">
                {open && props.children}
            </div>
        </div>
    );
}

export default InputBlock;