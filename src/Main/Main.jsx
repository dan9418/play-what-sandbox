import React, { useState } from 'react';
import './Main.css';
import Common from './Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';
import * as Songs from './Songs';
import HarmonicSeries from './HarmonicSeries/HarmonicSeries';

const Fretboard = Viewers.v2.Fretboard;

const NOTE_CONFIG = {
    strategy: 'NOTES_FROM_INTERVALS',
    args: {
        keyCenter: 'G4',
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
            strategy: 'PITCH_CLASS'
        }
    }
}

const MAP = [
    'P1',
    'm2',
    'M2',
    'm3',
    'M3',
    'P4',
    'TT',
    'TT',
    'P5',
    'm6',
    'm6',
    'M6',
    'm7',
    'm7',
    'M7',
    'M7'
]

const getHz = (f, i) => {
    const octave = f * 2;
    let hz = f * i;
    while(hz > octave) {
        hz = hz / 2;
    }
    return hz;
}

const getButtons = () => {
    const fundamental = 100;
    const overtones = 32;
    const freq = [];
    for(let i = 1; i <= overtones; i++) {
        if(i % 2 === 1) {
            freq.push(getHz(fundamental, i));
        }
    }
    freq.sort((a, b) => a - b)
    return freq.map((f, i) => <div key={i} className="button" onClick={() => PW.Sound.play(f)}>{MAP[i]}</div>);
}

const Main = () => {
    return (
        <div className='controller-manager'>
            <div className="top-nav">
                <div className="link"><Common.Icons.GitHub /></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu /></div>
            </div>
            <div className="stage-controller">
                Name
            </div>

            <div className="stage">
                <div>
                    {getButtons()}
                </div>
                <div>
                    <HarmonicSeries f={100} n={27} />
                </div>
                <div>
                    {Fretboard.Api.fromConfig(FRETBOARD_CONFIG, NOTE_CONFIG)}
                </div>
                <pre>
                    {/*JSON.stringify(PW.v2.parse(NOTE_CONFIG), null, '\t')*/}
                </pre>
            </div>
        </div>
    );
}

export default Main;
