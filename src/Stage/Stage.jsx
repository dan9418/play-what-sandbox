import React, { useState } from 'react';
import './Stage.css';

import PlaybackControls from '../PlaybackControls/PlaybackControls';

import MasterSelector from './MasterSelector';
import OutputList from './OutputList';

const Stage = () => {
    return (
        <div className="stage pw-medium">
            <div className="center pw-light">
                <MasterSelector />
                <hr />
                <PlaybackControls />
                <hr />
                <OutputList />
            </div>
        </div>
    );
}

export default Stage;
