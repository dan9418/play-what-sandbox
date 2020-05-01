import React from 'react';
import './Graph.css';

const Cell = props => {
    const { p, d, color } = props;
    return (
        <div className='cell'>
            {color && <div className='point' style={{ backgroundColor: color }} />}
        </div>
    );
};

const Label = ({ axis, children }) => {
    return (
        <div className={`label ${axis}`}>
            {children}
        </div>
    );
};

const areEqual = (v1, v2) => {
    return v1.d === v2.d && v1.p === v2.p;
}

const getCells = (origin, vectors, x, y) => {
    const cells = [];
    for (let d = y; d >= -1; d--) {
        cells.push(<Label key={'d' + d} axis='y'>{d > -1 && d}</Label>)
        for (let p = 0; p < x; p++) {
            if (d === -1) {
                cells.push(<Label key={'p' + p} axis='x'>{p}</Label>)
            }
            else {
                const point = { p: p, d: d };
                const isOrigin = areEqual(origin, point);
                const isResultant = vectors.findIndex(v => areEqual(v, point)) >= 0;
                cells.push(<Cell key={d + '-' + p} p={p} d={d} color={isOrigin ? 'red' : isResultant ? 'blue' : null} />)
            }
        }
    }
    return cells;
};

const Graph = props => {
    const { origin, vectors, x, y } = props;
    return (
        <div className="graph">{getCells(origin, vectors, x, y)}</div>
    );
}

export default Graph;