import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './Stage.css';

const Stage = ({ children }) => {
    return (
        <div className="stage" id="stage">
            <div className="column">
                {children}
            </div>
        </div>
    );
}

export default Stage;
