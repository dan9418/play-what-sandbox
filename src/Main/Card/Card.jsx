import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, children, defaultOpen }) => {
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <div className={`card ${open ? 'open' : ''}`}>
            <div className="title" onClick={() => setOpen(!open)}>{title}</div>
            {open && <div className="content">{children}</div>}
        </div>
    )
}

export default Card;