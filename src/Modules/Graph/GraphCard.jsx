import React, { useState } from 'react';
import PW from 'play-what';

const Theory = PW.v2.TheoryNew;
const Constants = PW.v2.ConstantsNew;
const Presets = PW.v2.PresetsNew;
import Graph from './Graph';
import ConceptInput from '../../Common/UI/ConceptInput/ConceptInput';

const MAX_VECTOR = Constants.MAX_VECTOR;
const ORIGIN = { p: 0, d: 2 };
const VECTORS = [
    { d: 0, p: 0 },
    { d: 2, p: 4 },
    { d: 4, p: 7 },
    { d: 6, p: 11 }
];

import Card from '../../Common/UI/Card/Card';

import './Graph.css';

const GraphCard = () => {
    const [max, setMax] = useState(MAX_VECTOR);
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(VECTORS);

    return (
        <Card title="Graph" defaultOpen>
            <div className="graph-card">
                <div className='left'>
                    <ConceptInput keyCenter={origin} setKeyCenter={setOrigin} intervals={vectors} setIntervals={setVectors} max={max} />
                </div>
                <div className='right'>
                    <Graph origin={origin} vectors={vectors} x='d' y='p' max={max} title="d vs p" yLabel="p" xLabel="d" />
                </div>
            </div>
        </Card>
    )
}

export default GraphCard;