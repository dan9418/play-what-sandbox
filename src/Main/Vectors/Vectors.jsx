import React, { useState } from 'react';
import './Vectors.css';
import Common from '../Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';

const ORIGIN = {
    p: 0,
    d: 0
};

const VectorInput = props => {
    return (
        <div className='vector-input'>
            <label>p: </label>
            <input type="number" value={props.value.p} onChange={e => props.setValue({ p: e.target.value, d: props.d})} />
            <label>d: </label>
            <input type="number" value={props.value.d} onChange={e => props.setValue({ p: props.p, d: e.target.value})} />
            {props.remove && <input type="button" onClick={() => props.remove()} value="-" />}
        </div>
    );
};

const Vectors = props => {
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState([ORIGIN]);
    const [numVectors, setNumVectors] = useState(1);

    const vectorInputs = [];
    for (let i = 0; i < vectors.length; i++) {
        vectorInputs.push(<VectorInput key={i} value={vectors[i]} setValue={v => setVectors([...vectors.slice(0,i), v, ...(vectors.slice(i+1))])} />);
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
        </div>
    );
};

export default Vectors;