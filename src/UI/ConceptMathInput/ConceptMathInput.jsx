import React from 'react';
import './ConceptMathInput.css';

import PW from 'play-what';
import VectorInput from '../VectorInput/VectorInput';
import MatrixInput from '../MatrixInput/MatrixInput';
import InputBlock from '../InputBlock/InputBlock';

const ConceptMathInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-math-input pw-input-block-group">
            <InputBlock title="a">
                <VectorInput value={keyCenter} setValue={setKeyCenter} />
            </InputBlock>
            <InputBlock title="B">
                <MatrixInput value={intervals} setValue={setIntervals} />
            </InputBlock>
        </div>
    );
}

export default ConceptMathInput;