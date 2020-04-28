import React, { useState } from 'react';
import './Vectors.css';
import Common from '../../Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';

const C_MAJ = { p: 0, d: 2 };
const Cs_MAJ = { p: 1, d: 2 };

const ORIGIN = Cs_MAJ;

const DIM_7 = [
    { p: 0, d: 0},
    { p: 3, d: 2},
    { p: 6, d: 4},
    { p: 9, d: 6}
];

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

const DIATONIC_NAMES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const DIATONIC_MAPPING = [9, 11, 0, 2, 4, 5, 7];

const getResultant = (origin, vector) => {
    return {
        p: (origin.p + vector.p) % 12,
        d: (origin.d + vector.d) % 7
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

const Vectors = props => {
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(DIM_7);

    const vectorInputs = [];
    const resultants = [];
    for (let i = 0; i < vectors.length; i++) {
        vectorInputs.push(<VectorInput key={i} value={vectors[i]} setValue={v => setVectors([...vectors.slice(0, i), v, ...(vectors.slice(i + 1))])} />);
        resultants.push(<Resultant key={i} value={getResultant(origin, vectors[i])} />);
    }
    const Add = () => <input type="button" value="Add" onClick={() => setVectors([...vectors, ORIGIN])} />

    return (
        <div className='vectors-container'>
            <div className='origin-input'>
                <h2>Origin</h2>
                <VectorInput value={origin} setValue={setOrigin} />
            </div>
            <div className='vectors-input'>
                <h2>Vectors</h2>
                {vectorInputs}
                <Add />
            </div>
            <div className='resultant-container'>
                <h1>Resultants</h1>
                {resultants}
            </div>
        </div>
    );
};

export default Vectors;