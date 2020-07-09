import React, { useState } from 'react';
import './Stage.css';

import PlaybackControls from '../PlaybackControls/PlaybackControls';

import MasterSelector from './MasterSelector';
import OutputList from './OutputList';

const Stage = () => {
    return (
        <div className="stage pw-medium">
            <div className="center pw-light">
                <div>
                    <PlaybackControls />
                    <MasterSelector />
                </div>
                <div>
                    <OutputList />
                </div>
            </div>
        </div>
    );
}

export default Stage;
