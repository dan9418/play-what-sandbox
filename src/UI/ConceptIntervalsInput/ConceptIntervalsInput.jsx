import React from 'react';
import './ConceptIntervalsInput.css';
import PW from 'play-what';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import IntervalListInput from '../IntervalListInput/IntervalListInput';
import InputBlock from '../InputBlock/InputBlock';

const ConceptIntervalsInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-intervals-input">
            <InputBlock title="Key Center">
                <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
            </InputBlock>
            <InputBlock title="Intervals">
                <IntervalListInput intervals={intervals} setIntervals={setIntervals} />
            </InputBlock>
        </div>
    );
}

export default ConceptIntervalsInput;