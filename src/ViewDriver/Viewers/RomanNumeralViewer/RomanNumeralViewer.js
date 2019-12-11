import * as React from 'react';
import { ColorStrategies } from '../../../Theory/TODO/ColorStrategies';
import './RomanNumeralViewer.css';

function IntervalLabel(props) {
    return (
        <div
            className='interval-label'
            style={ColorStrategies.degree({ interval: props.interval })}
        >
            {props.interval.id}
        </div>
    )
}

export function RomanNumeralViewer(props) {
    let keyCenterIntervals = props.romanNumeral.intervals;
    let relativeIntervals = props.romanNumeral.relativeIntervals;
    return (
        <div className='roman-numeral-viewer'>
            {props.romanNumeral.name}
            <div>
                {keyCenterIntervals.map((i) =>
                    <IntervalLabel key={i.id} interval={i} />
                )}
            </div>
            <div>
                {relativeIntervals.map((i) =>
                    <IntervalLabel key={i.id} interval={i} />
                )}
            </div>
        </div>
    );
}