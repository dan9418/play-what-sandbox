import React from 'react';
import './Stage.css';

const Stage = ({ children }) => {
    return (
        <div className="stage pw-light" id="stage">
            {children}
        </div>
    );
}

export default Stage;
