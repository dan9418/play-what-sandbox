import React, { useState } from 'react';
import './Stage.css';

import PlaybackControls from '../PlaybackControls/PlaybackControls';

import MasterSelector from './MasterSelector';
import { atom } from 'recoil';

export const noteState = atom({
    key: 'note',
    default: 0
});

const Stage = () => {
    return (
        <div className="stage pw-medium">
            <div className="center pw-light">
                <MasterSelector />
                <hr />
                <PlaybackControls />
            </div>
        </div>
    );
}

export default Stage;
