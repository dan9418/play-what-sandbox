import React, { useState } from 'react';
import './Vectors.css';
import Common from '../../Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';
import Graph from '../Graph/Graph';

const Theory = PW.v2.TheoryNew;
const Constants = PW.v2.ConstantsNew;
const Presets = PW.v2.PresetsNew;

const MAX_VECTOR = Constants.MAX_VECTOR;
const ORIGIN = { p: 0, d: 2 };
const VECTORS = [
    { p: 0, d: 0 },
    { p: 3, d: 2 },
    { p: 6, d: 4 },
    { p: 9, d: 6 }
];


const Resultant = props => {
    return (
        <div className='resultant'>
            {Theory.getNoteName(props.value, props.max)}
        </div>
    );
};

const Vector = props => {
    const { p, d } = props.value;
    const data = props.point ? Presets.KEY_CENTERS : Presets.INTERVALS;
    const interval = data.find(i => i.p === p && i.d === d);
    const label = interval ? interval.id : '';
    return (
        <div className='vector-input'>
            <label>p: </label>
            <input type='number' value={p} onChange={e => props.setValue({ p: parseInt(e.target.value), d: d })} />
            <label>d: </label>
            <input type='number' value={d} onChange={e => props.setValue({ p: p, d: parseInt(e.target.value) })} />
            <label>{label}</label>
        </div>
    );
};

const Vectors = () => {
    const [max, setMax] = useState(MAX_VECTOR);
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(VECTORS);

    const resultants = Theory.addVectorsBatch(origin, vectors, max);
    
    const maxInput = <Vector value={max} setValue={setMax} />
    const originInput = <Vector value={origin} setValue={setOrigin} point />
    const vectorInputs = resultants.map((v, i) => <Vector key={i} value={v} setValue={x => setVectors([...vectors.slice(0, i), x, ...(vectors.slice(i + 1))])} />);
    const resultantOutputs = resultants.map((r, i) => <Resultant key={i} value={r} max={max} />);

    const Add = () => <input type='button' value='Add' onClick={() => setVectors([...vectors, origin])} />

    return (
        <div className='vectors'>
            <div className='left'>
                <div className='origin-input'>
                    <label>Max Vector</label>
                    {maxInput}
                </div>
                <div className='origin-input'>
                    <label>Origin</label>
                    {originInput}
                </div>
                <div className='vectors-input'>
                    <label>Vectors</label>
                    {vectorInputs}
                    <Add />
                </div>
                <div className='resultants'>
                    <label>Resultants</label>
                    {resultantOutputs}
                </div>
            </div>
            <div className='right'>
                <Graph origin={origin} vectors={vectors} x={max.p} y={max.d} />
            </div>
        </div>
    );
};

export default Vectors;