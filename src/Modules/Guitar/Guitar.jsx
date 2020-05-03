import React from 'react';
import './Guitar.css';

import Viewers from 'play-what-react-viewers';

const Fretboard = Viewers.v2.Fretboard.Viewer;

const Guitar = () => {
    return (
        <div className="guitar">
            <Fretboard />
        </div>
    )
}

export default Guitar;