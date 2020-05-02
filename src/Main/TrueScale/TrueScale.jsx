import React from 'react';
import PW from 'play-what';
import './TrueScale.css';

const TRUE_INTERVAL_MAP = [
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

const getHz = (fund, n) => {
    const octave = fund * 2;
    let hz = fund * n;
    while(hz > octave) {
        hz = hz / 2;
    }
    return hz;
}

const getButtons = (fundamental, n) => {
    const freq = [];
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 1) {
            freq.push(getHz(fundamental, i));
        }
    }
    freq.sort((a, b) => a - b);
    return freq.map((f, i) => <div key={i} className="button" onClick={() => PW.Sound.play(f)}>{TRUE_INTERVAL_MAP[i]}</div>);
}

const TrueScale = props => {
    const { fundamental, n } = props;
    return (
        <div className="true-scale">
            {getButtons(fundamental, n)}
        </div>
    )
}

export default TrueScale;