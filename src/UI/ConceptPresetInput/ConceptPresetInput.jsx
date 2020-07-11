import React from 'react';
import './ConceptPresetInput.css';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import PW from 'play-what';
import PresetInput from '../PresetInput/PresetInput';
import InputBlock from '../InputBlock/InputBlock';

const ConceptPresetInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;
    const preset = PW.Theory.findPreset(intervals);
    const setPreset = newIntervals => setIntervals(newIntervals);

    return (
        <div className="concept-preset-input">
            <InputBlock title="Key Center">
                <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
            </InputBlock>
            <InputBlock title="Preset">
                <PresetInput preset={preset} setPreset={setPreset} />
            </InputBlock>
        </div>
    );
}

export default ConceptPresetInput;