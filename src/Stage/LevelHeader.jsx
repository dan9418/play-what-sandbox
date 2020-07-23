import React, { useState } from 'react';
import './Stage.css';
import ButtonInput from '../UI/ButtonInput/ButtonInput';

const LevelHeader = props => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    return (
        <>
            <div className="level-header">
                <div className="level-title">{props.title}</div>
                <ButtonInput className="pw-secondary" onClick={toggleOpen}>Edit</ButtonInput>
            </div>
            <div className={`edit-panel ${open ? 'open' : ''}`}>
                {props.editPanel}
            </div>
        </>
    );
};

export default LevelHeader;