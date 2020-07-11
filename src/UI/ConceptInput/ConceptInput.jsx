import React, { useState } from 'react';
import './ConceptInput.css';
import PW from 'play-what';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';
import ConceptIntervalsInput from '../ConceptIntervalsInput/ConceptIntervalsInput';
import ConceptMathInput from '../ConceptMathInput/ConceptMathInput';
import Dropdown from '../Dropdown/Dropdown';

const CONCEPT_INPUT_MODES = {
    preset: {
        id: 'preset',
        name: 'Preset',
        component: ConceptPresetInput
    },
    intervals: {
        id: 'intervals',
        name: 'Intervals',
        component: ConceptIntervalsInput
    },
    math: {
        id: 'math',
        name: 'Math',
        component: ConceptMathInput
    }
}
const CONCEPT_INPUT_MODES_VALUES = Object.values(CONCEPT_INPUT_MODES);

const ConceptInput = props => {

    const { note, setNote } = props;
    const { a: keyCenter, B: intervals } = note;
    const setKeyCenter = kc => setNote({ ...note, a: kc });
    const setIntervals = ivls => setNote({ ...note, B: ivls });

    const [inputMode, setInputMode] = useState(CONCEPT_INPUT_MODES.preset);

    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals);
    const noteNames = notes.map((n, i) => <div key={i} className="note-name">{PW.Theory.getNoteName(n)}</div>);

    const Component = inputMode.component;

    return (
        <div className="concept-input">
            <div className='input-mode-box'>
                <label>Input Mode: </label>
                <Dropdown value={inputMode} setValue={setInputMode} options={CONCEPT_INPUT_MODES_VALUES} />
            </div>
            <div className="note-names pw-lighter">{noteNames}</div>
            <Component keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />
        </div>
    );
}

export default ConceptInput;