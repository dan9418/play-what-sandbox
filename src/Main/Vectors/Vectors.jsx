import React, { useState } from 'react';
import './Vectors.css';
import Common from '../../Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';

// Presets
const C_MAJ = { p: 0, d: 2 };
const Cs_MAJ = { p: 1, d: 2 };
const DIM_7 = [
    { p: 0, d: 0},
    { p: 3, d: 2},
    { p: 6, d: 4},
    { p: 9, d: 6}
];


const DIATONIC_NAMES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const DIATONIC_MAPPING = [9, 11, 0, 2, 4, 5, 7];

const NUM_DEGREES = 7;
const NUM_PITCHES = 12;

const getAccidentalString = (offset) => {
    switch (offset) {
        case 0:
            return ''
        case 1:
            return '#';
        case 2:
            return 'x';
        case -1:
            return 'b';
        case -2:
            return 'bb';
        default:
            return (offset < 0) ? -offset + 'b' : offset + '#';
    }
}

const addVectors = (origin, vector) => {
    return {
        p: (origin.p + vector.p) % NUM_PITCHES,
        d: (origin.d + vector.d) % NUM_DEGREES
    };
}

const Resultant = props => {
    const { p, d } = props.value;
    return (
        <div className='resultant'>
            <span>{DIATONIC_NAMES[d]}</span>
            <span>{getAccidentalString(p - DIATONIC_MAPPING[d])}</span>
        </div>
    );
};

const VectorInput = props => {
    const { p, d } = props.value;
    return (
        <div className='vector-input'>
            <label>p: </label>
            <input type="number" value={p} onChange={e => props.setValue({ p: e.target.value, d: d })} />
            <label>d: </label>
            <input type="number" value={d} onChange={e => props.setValue({ p: p, d: e.target.value })} />
            {props.remove && <input type="button" onClick={() => props.remove()} value="-" />}
        </div>
    );
};

const Vectors = () => {
    const [origin, setOrigin] = useState(Cs_MAJ);
    const [vectors, setVectors] = useState(DIM_7);

    const vectorInputs = [];
    const resultants = [];
    for (let i = 0; i < vectors.length; i++) {
        vectorInputs.push(<VectorInput key={i} value={vectors[i]} setValue={v => setVectors([...vectors.slice(0, i), v, ...(vectors.slice(i + 1))])} />);
        resultants.push(<Resultant key={i} value={addVectors(origin, vectors[i])} />);
    }
    const Add = () => <input type="button" value="Add" onClick={() => setVectors([...vectors, ORIGIN])} />

    return (
        <div className='vectors'>
            <div className='origin-input'>
                <label>Origin</label>
                <VectorInput value={origin} setValue={setOrigin} />
            </div>
            <div className='vectors-input'>
                <label>Vectors</label>
                {vectorInputs}
                <Add />
            </div>
            <div className='resultants'>
                <label>Resultants</label>
                {resultants}
            </div>
        </div>
    );
};

export default Vectors;