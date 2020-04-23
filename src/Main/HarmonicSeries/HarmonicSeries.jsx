import React, { useState } from 'react';
import './HarmonicSeries.css';
import PW from 'play-what';

const MAX_PRIME = 23;

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
    ['23']: 'darkgreen'
}


const Overtone = ({ n }) => {
    //const color = (n * 1000).toString(16);
    //const color = Math.floor(Math.random() * parseInt('aaaaaa', 16)).toString(16);
    //console.log(color);
    let color = '#ddd';
    if(PRIMES[n]) {
        color = PRIMES[n];
    }
    else {
        let x = n;
        while(x >= 1) {
            x = x / 2;
            if(PRIMES[x]) {
                color = PRIMES[x];
                break;
            }
        }
    }

    return (
        <div className="overtone" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
            {[...Array(n)].map((e, i) => (
                <div className="n" key={n} >
                    <div className="overtone-line" style={{ backgroundColor: color }} />
                </div>
            ))}
        </div>
    );
};

const HarmonicSeries = props => {
    return (
        <div className="harmonic-series">
            {[...Array(props.n)].map((e, i) => <Overtone n={props.n - i - 1} />)}
        </div>
    );
};

export default HarmonicSeries;