import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import PRESETS from '../../Common/Presets/Presets';
import DropdownInput from '../../UI/DropdownInput/DropdownInput';
import ButtonInput from '../ButtonInput/ButtonInput';
import './PresetInput.css';

const PresetInput = () => {
    // Source

    // Scope
    const [scopeIndex, setScopeIndex] = useState(0);
    const scopeOptions = PRESETS.map(({ name, id }) => ({ name, id }));
    const scope = PRESETS[scopeIndex];
    const setScope = (v, i) => {
        setScopeIndex(i);
        setCategoryIndex(0);
        setPresetIndex(0)
    };

    // Category
    const [categoryIndex, setCategoryIndex] = useState(0);
    const categoryOptions = scope.categories;
    const category = categoryOptions[categoryIndex];
    const setCategory = (v, i) => {
        setCategoryIndex(i);
        setPresetIndex(0)
    };

    // Preset
    const [presetIndex, setPresetIndex] = useState(0);
    const presetOptions = category.presets;
    const preset = presetOptions[presetIndex];
    const setPreset = (v, i) => setPresetIndex(i);

    return (
        <div className="preset-input">
            <div className="input-row">
                <label>Scope</label>
                <DropdownInput options={scopeOptions} value={scope.id} setValue={setScope} />
            </div>
            <div className="input-row">
                <label>Category</label>
                <DropdownInput options={categoryOptions} value={category.id} setValue={setCategory} />
            </div>
            <div className="input-row">
                <label>Preset</label>
                <DropdownInput options={presetOptions} value={preset.id} setValue={setPreset} />
            </div>
            <ButtonInput className="pw-accent" onClick={() => setSource(preset)}>Go!</ButtonInput>
        </div>
    );
};

export default PresetInput;