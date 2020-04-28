import React from 'react';

const DEMO_FUND = 100; // Hz
const DEMO_N = 32 // Overtones

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

const getButtons = () => {
    const freq = [];
    for(let n = 1; n <= DEMO_N; n++) {
        if(n % 2 === 1) {
            freq.push(getHz(DEMO_FUND, n));
        }
    }
    freq.sort((a, b) => a - b);
    return freq.map((f, i) => <div key={i} className="button" onClick={() => PW.Sound.play(f)}>{TRUE_INTERVAL_MAP[i]}</div>);
}

const TrueScale = props => {
    return (
        <div className="true-scale">
            {getButtons()}
        </div>
    )
}

export default TrueScale;