import React, { useState } from 'react';
import './Section.css';

export default function Section(props) {

    const [open, setOpen] = useState(true)

    return (
        <div className='section'>
            <div className='section-header' onClick={() => setOpen(!open)}>
                {props.header}
                <div className='section-header-toggle'>{open ? '-' : '+'}</div>
            </div>
            {open && <div className='section-content'>{props.children}</div>}
        </div>
    );
}