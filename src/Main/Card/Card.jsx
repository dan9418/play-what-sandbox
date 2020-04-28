import React from 'react';
import './Card.css';

const Card = ({ title, children }) => {
    return (
        <div className="card">
            <h2 className="title">{title}</h2>
            <div className="content">{children}</div>
        </div>
    )
}

export default Card;