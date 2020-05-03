import React from 'react';
import './Guitar.css';

import Viewers from 'play-what-react-viewers';

const Fretboard = Viewers.v2.Fretboard;

const NOTE_CONFIG = {
    strategy: 'NOTES_FROM_INTERVALS',
    args: {
        keyCenter: 'Db4',
        intervals: {
            strategy: 'SCALE',
            args: {
                preset: 'Major'
            }
        }
    }
}

const FRETBOARD_CONFIG = {
    fretLow: 0,
    fretHigh: 12,
    strings: [
        { tuning: 16 },   // e
        { tuning: 11 },   // B
        { tuning: 7 },    // G
        { tuning: 2 },    // D
        { tuning: -3 },   // A
        { tuning: -8 }    // E
    ],
    showFretNumbers: true,
    showDots: true,
    fretMapping: {
        // mapBy: 'PITCH_CLASS',
        label: {
            strategy: 'INTERVAL'
        },
        color: {
            strategy: 'DEGREE'
        }
    }
}


const Guitar = () => {
    return (
        <div className="guitar">
            {Fretboard.Api.fromConfig(FRETBOARD_CONFIG, NOTE_CONFIG)}
        </div>
    )
}

export default Guitar;