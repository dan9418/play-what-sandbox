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
    { d: 0, p: 0 },
    { d: 2, p: 4 },
    { d: 4, p: 7 },
    { d: 6, p: 11 }
];


const Resultant = props => {
    return (
        <div className='resultant'>
            {Theory.getNoteName(props.value, props.max)}
        </div>
    );
};

const VectorInput = props => {
    const { p, d } = props.value;
    return (
        <div className='vector-input'>
            <input type='number' value={d} onChange={e => props.setValue({ p: parseInt(e.target.value), d: d })} />
            <input type='number' value={p} onChange={e => props.setValue({ p: p, d: parseInt(e.target.value) })} />
        </div>
    );
};

const VectorLabel = ({ value }) => {
    return (
        <div className='vector-label'>
            {Theory.getIntervalName(value)}
        </div>
    );
};

const VectorRow = ({ vector, origin, max, setValue }) => {
    const resultant = Theory.addVectors(origin, vector, max)
    console.log(vector);
    return (
        <div className='vector-row'>
            <VectorInput value={vector} setValue={setValue} />
            <VectorLabel value={vector} max={max} />
        </div>
    );
};

const Vectors = () => {
    const [max, setMax] = useState(MAX_VECTOR);
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(VECTORS);

    const maxInput = <VectorInput value={max} setValue={setMax} />
    const originInput = <VectorInput value={origin} setValue={setOrigin} point />
    const rows = vectors.map((v, i) => (
        <VectorRow key={i} vector={v} origin={origin} max={max} setValue={x => setVectors([...vectors.slice(0, i), x, ...(vectors.slice(i + 1))])} />
    ));

    // const Add = () => <input type='button' value='Add' onClick={() => setVectors([...vectors, origin])} />

    return (
        <div className='vectors'>
            <div className='left'>
                <div className='origin-input'>
                    {originInput}
                </div>
                <div className='vector-rows'>
                    {rows}
                </div>
            </div>
            <div className='right'>
                <Graph origin={origin} vectors={vectors} x={max.p} y={max.d} />
                <div className='max-input'>
                    <label>Max Vector</label>
                    {maxInput}
                </div>
            </div>
        </div>
    );
};

export default Vectors;