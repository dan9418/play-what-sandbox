import React from 'react';
import './ConceptInput.css';

import PW from 'play-what';
const Theory = PW.v2.TheoryNew;
const Constants = PW.v2.ConstantsNew;
const Presets = PW.v2.PresetsNew;

const VectorInput = ({ value, setValue }) => {
    const { p, d } = value;
    return (
        <div className='vector-input'>
            <input type='number' disabled={!setValue} value={d} onChange={e => setValue({ d: parseInt(e.target.value), p: p })} />
            <input type='number' disabled={!setValue} value={p} onChange={e => setValue({ d: d, p: parseInt(e.target.value) })} />
        </div>
    );
};

const IntervalLabel = ({ value, max }) => {
    return (
        <div className='interval-label'>
            {Theory.getIntervalName(value, max)}
        </div>
    );
};

const NoteLabel = ({ value, max }) => {
    return (
        <div className='note-label'>
            {Theory.getNoteName(value, max)}
        </div>
    );
};

const VectorRow = ({ vector, origin, max, setValue }) => {
    const resultant = Theory.addVectors(origin, vector, max)
    return (
        <div className='vector-row'>
            <VectorInput value={vector} setValue={setValue} />
            <IntervalLabel value={vector} max={max} />
            <VectorInput value={resultant} />
            <NoteLabel value={resultant} max={max} />*
        </div>
    );
};

const ConceptInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals, max } = props;

    const rows = intervals.map((v, i) => (
        <VectorRow key={i} vector={v} origin={keyCenter} max={max} setValue={x => setIntervals([...intervals.slice(0, i), x, ...(intervals.slice(i + 1))])} />
    ));

    return (
        <div className="concept-input">
            <div className='origin-input'>
                <label>Origin</label>
                <VectorInput value={keyCenter} setValue={setKeyCenter} point />
                <NoteLabel value={keyCenter} max={max} />
            </div>
            <div className='vector-rows'>
                <label>Vectors</label>
                {rows}
            </div>
        </div>
    );
}

export default ConceptInput;