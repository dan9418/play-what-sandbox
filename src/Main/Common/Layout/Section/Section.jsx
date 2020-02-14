import React, { useState } from 'react';
import './Section.css';

import Common from '../../_module';

export default function Section(props) {

    const [open, setOpen] = useState(false)

    return (
        <div className='section'>
            <div className='section-header' onClick={() => setOpen(!open)}>
                <div className='title'>{props.header}</div>
                <div className='preview'>{props.preview || null}</div>
                <div className='toggle'><Common.Icons.Pencil/></div>
            </div>
            {open && <div className='section-content'>{props.children}</div>}
        </div>
    );
}