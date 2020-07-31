import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ZOOM } from '../../Common/Constants';
import { sourceState } from '../../Common/State';
import DropdownInput from '../../UI/DropdownInput/DropdownInput';
import './PresetInput.css';
import PRESETS from '../../Common/Presets/Presets';

const PresetInput = () => {
    // Scope
    const [scopeIndex, setScopeIndex] = useState(0);
    const scopeOptions = PRESETS.map(({ name, id }) => ({ name, id }));
    const scope = PRESETS[scopeIndex];

    // Category
    const [categoryIndex, setCategoryIndex] = useState(0);
    const categoryOptions = scope.categories;
    const category = categoryOptions[categoryIndex];

    // Preset
    const [presetIndex, setPresetIndex] = useState(0);
    const presetOptions = category.presets;
    const preset = presetOptions[presetIndex];

    console.log(scopeIndex)

    return (
        <div className="preset-input">
            <div className="input-row">
                <label>Scope</label>
                <DropdownInput options={scopeOptions} value={scope.id} setValue={(v, i) => setScopeIndex(i)} />
            </div>
            <div className="input-row">
                <label>Category</label>
                <DropdownInput options={categoryOptions} value={category.id} setValue={(v, i) => setCategoryIndex(i)} />
            </div>
            <div className="input-row">
                <label>Preset</label>
                <DropdownInput options={presetOptions} value={preset.id} setValue={(v, i) => setPresetIndex(i)} />
            </div>
        </div>
    );
};

export default PresetInput;