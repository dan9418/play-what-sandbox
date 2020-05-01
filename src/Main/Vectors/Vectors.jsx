import React, { useState } from 'react';
import './Vectors.css';
import Common from '../../Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';
import Graph from '../Graph/Graph';

const Theory = PW.v2.TheoryNew;

const MAX_VECTOR = Theory.MAX_VECTOR;
const ORIGIN = { p: 0, d: 2 };
const VECTORS = [
    { p: 0, d: 0 },
    { p: 3, d: 2 },
    { p: 6, d: 4 },
    { p: 9, d: 6 }
];


const Resultant = props => {
    const { p, d } = props.value;
    return (
        <div className='resultant'>
            <span>{Theory.DEGREE_MAPPING[d].name}</span>
            <span>{Theory.getAccidentalString(p - Theory.DEGREE_MAPPING[d].pitch)}</span>
        </div>
    );
};

const VectorInput = props => {
    const { p, d } = props.value;
    const data = props.point ? Theory.KEY_CENTERS : Theory.INTERVALS;
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
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(VECTORS);

    const vectorInputs = [];
    const resultants = [];
    const resultantData = [];
    for (let i = 0; i < vectors.length; i++) {
        vectorInputs.push(<VectorInput key={i} value={vectors[i]} setValue={v => setVectors([...vectors.slice(0, i), v, ...(vectors.slice(i + 1))])} />);
        const resultant = Theory.addVectors(origin, vectors[i], max);
        resultantData.push(resultant)
        resultants.push(<Resultant key={i} value={resultant} />);
    }
    const Add = () => <input type="button" value="Add" onClick={() => setVectors([...vectors, origin])} />

    return (
        <div className='vectors'>
            <div className="left">
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
            <div className="right">
                <Graph origin={origin} vectors={vectors} x={max.p} y={max.d} />
            </div>
        </div>
    );
};

export default Vectors;