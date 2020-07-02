import React, { useState } from 'react';
import './Stage.css';

import MasterSelector from './MasterSelector';

const Stage = () => {
    return (
        <div className="stage pw-light">
            <h1>Play What?</h1>
            <p>Play What is a JavaScript library for musical concepts. More info TBA...</p>
            <MasterSelector />
            <hr />
        </div>
    );
}

export default Stage;
