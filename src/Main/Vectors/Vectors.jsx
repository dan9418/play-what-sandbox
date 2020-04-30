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

const MAX_VECTOR = { p: 12, d: 7};

const DEGREE_MAPPING = [
    {
        name: 'A',
        pitch: 9
    },
    {
        name: 'B',
        pitch: 11
    },
    {
        name: 'C',
        pitch: 0
    },
    {
        name: 'D',
        pitch: 2
    },
    {
        name: 'E',
        pitch: 4
    },
    {
        name: 'F',
        pitch: 5
    },
    {
        name: 'G',
        pitch: 7
    }
]

const KEY_CENTERS = [
    {
        id: 'A',
        name: 'A',
        p: 9,
        d: 0
    },
    {
        id: 'B',
        name: 'B',
        p: 11,
        d: 1
    },
    {
        id: 'C',
        name: 'C',
        p: 0,
        d: 2
    },
    {
        id: 'D',
        name: 'D',
        p: 2,
        d: 3
    },
    {
        id: 'E',
        name: 'E',
        p: 4,
        d: 4
    },
    {
        id: 'F',
        name: 'F',
        p: 5,
        d: 5
    },
    {
        id: 'G',
        name: 'G',
        p: 7,
        d: 6
    }
];

const INTERVALS = [
    {
        id: 'P1',
        name: 'Perfect Unison',
        d: 0,
        p: 0
    },
    {	 
        id: 'm2',
        name: 'Minor 2nd',
        d: 1,
        p: 1
    },
    {
        id: 'M2',
        name: 'Major 2nd',
        d: 1,
        p: 2
    },
    {
        id: 'A2',
        name: 'Augmented 2nd',
        d: 1,
        p: 3
    },
    {
        id: 'd3',
        name: 'Diminished 3rd',
        d: 2,
        p: 2
    },
    {
        id: 'm3',
        name: 'Minor 3rd',
        d: 2,
        p: 3
    },
    {
        id: 'M3',
        name: 'Major 3rd',
        d: 2,
        p: 4
    },
    {
        id: 'A3',
        name: 'Augmented 3rd',
        d: 2,
        p: 5
    },
    {
        id: 'd4',
        name: 'Diminished 4th',
        d: 3,
        p: 4
    },
    {
        id: 'P4',
        name: 'Perfect 4th',
        d: 3,
        p: 5
    },
    {
        id: 'A4',
        name: 'Augmented 4th',
        d: 3,
        p: 6
    },
    {
        id: 'd5',
        name: 'Diminished 5th',
        d: 4,
        p: 6
    },
    {
        id: 'P5',
        name: 'Perfect 5th',
        d: 4,
        p: 7
    },
    {
        id: 'A5',
        name: 'Augmented 5th',
        d: 4,
        p: 8
    },
    {
        id: 'd6',
        name: 'Diminished 6th',
        d: 5,
        p: 7
    },
    {
        id: 'm6',
        name: 'Minor 6th',
        d: 5,
        p: 8
    },
    {
        id: 'M6',
        name: 'Major 6th',
        d: 5,
        p: 9
    },
    {
        id: 'A6',
        name: 'Augmented 6th',
        d: 5,
        p: 10
    },
    {
        id: 'd7',
        name: 'Diminished 7th',
        d: 6,
        p: 9
    },
    {
        id: 'm7',
        name: 'Minor 7th',
        d: 6,
        p: 10
    },
    {	 
        id: 'M7',
        name: 'Major 7th',
        d: 6,
        p: 11
    },
    {
        id: 'P8',
        name: 'Octave',
        d: 7,
        p: 12
    }
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

const addVectors = (origin, vector) => {
    return {
        p: (origin.p + vector.p) % MAX_VECTOR.p,
        d: (origin.d + vector.d) % MAX_VECTOR.d
    };
}

const Resultant = props => {
    const { p, d } = props.value;
    return (
        <div className='resultant'>
            <span>{DEGREE_MAPPING[d].name}</span>
            <span>{getAccidentalString(p - DEGREE_MAPPING[d].pitch)}</span>
        </div>
    );
};

const VectorInput = props => {
    const { p, d } = props.value;
    const data = props.point ? KEY_CENTERS : INTERVALS;
    const interval = data.find(i => i.p === p && i.d === d);
    const label = interval ? interval.id : '';
    return (
        <div className='vector-input'>
            <label>p: </label>
            <input type="number" value={p} onChange={e => props.setValue({ p: parseInt(e.target.value), d: d })} />
            <label>d: </label>
            <input type="number" value={d} onChange={e => props.setValue({ p: p, d: parseInt(e.target.value) })} />
            <label>{label}</label>
        </div>
    );
};

const Vectors = () => {
    const [max, setMax] = useState(MAX_VECTOR);
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
                <label>Max Vector</label>
                <VectorInput value={max} setValue={setMax} />
            </div>
            <div className='origin-input'>
                <label>Origin</label>
                <VectorInput value={origin} setValue={setOrigin} point />
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