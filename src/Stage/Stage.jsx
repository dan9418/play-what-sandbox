import React, { useState } from 'react';
import './Stage.css';

import PlaybackControls from '../PlaybackControls/PlaybackControls';

import MasterSelector from './MasterSelector';

const Stage = () => {
    return (
        <div className="stage pw-light">
            <h1>Play What?</h1>
            <p>Play What is a JavaScript library for musical concepts. More info TBA...</p>
            <hr />
            <MasterSelector />
            <hr />
            <PlaybackControls />
        </div>
    );
}

export default Stage;
