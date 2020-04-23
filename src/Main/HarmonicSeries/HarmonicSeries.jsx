import React, { useState } from 'react';
import './HarmonicSeries.css';
import PW from 'play-what';

const MAX_PRIME = 27;

const PRIMES = {
    ['1']: 'black',
    ['2']: 'red',
    ['3']: 'orange',
    ['5']: 'yellow',
    ['7']: 'green',
    ['11']: 'blue',
    ['13']: 'indigo',
    ['17']: 'purple',
    ['19']: 'darkblue',
    ['23']: 'darkgreen',
    // ???
    ['9']: 'salmon',
    ['21']: 'aqua',
    ['27']: 'lime'
}


const Overtone = ({ f, n }) => {
    //const color = (n * 1000).toString(16);
    //const color = Math.floor(Math.random() * parseInt('aaaaaa', 16)).toString(16);
    //console.log(color);
    let color = '#ddd';
    if (PRIMES[n]) {
        color = PRIMES[n];
    }
    else {
        let x = n;
        while (x >= 1) {
            x = x / 2;
            if (PRIMES[x]) {
                color = PRIMES[x];
                break;
            }
        }
    }

    return (
        <div className="overtone" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
            {[...Array(n)].map((e, i) => (
                <div className="n" key={n} >
                    <div className="overtone-line"
                    style={{ backgroundColor: i === 1 && PRIMES[n] ? color : '#ddd' }}
                    onClick={() => PW.Sound.play(f * n)}
                    />
                    <div className="overtone-info">
                        {n}
                    </div>
                </div>
            ))}
        </div>
    );
};

const HarmonicSeries = ({ f, n }) => {
    return (
        <div className="harmonic-series">
            {[...Array(n)].map((e, i) => <Overtone f={f} n={n - i} />)}
        </div>
    );
};

export default HarmonicSeries;