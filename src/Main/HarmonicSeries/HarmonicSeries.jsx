import React, { useState } from 'react';
import './HarmonicSeries.css';
import PW from 'play-what';


const Overtone = ({ n }) => {
    const color = (n * 1000).toString(16);
    //const color = Math.floor(Math.random() * parseInt('aaaaaa', 16)).toString(16);
    console.log(color);

    return (
        <div className="overtone" style={{gridTemplateColumns: `repeat(${n}, 1fr)`}}>
            {[...Array(n)].map((e, i) => <div className="n" key={n} style={{ borderRight: `1px solid #${color}` }} />)}
        </div>
    );
};

const HarmonicSeries = props => {
    return (
        <div className="harmonic-series">
            {[...Array(props.n)].map((e, i) => <Overtone n={i + 1} />)}
        </div>
    );
};

export default HarmonicSeries;