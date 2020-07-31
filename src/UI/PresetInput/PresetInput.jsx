import React from 'react';
import { useRecoilValue } from 'recoil';
import { ZOOM } from '../../Common/Constants';
import { sourceState } from '../../Common/State';
import DropdownInput from '../../UI/DropdownInput/DropdownInput';
import './PresetInput.css';

const PresetInput = () => {
    const { source, scope } = useRecoilValue(sourceState);
    const options = Object.entries(ZOOM).map(([name, id]) => ({ name, id }));

    return (
        <div className="preset-input">
            <div className="input-row">
                <label>Scope</label>
                <DropdownInput options={options} value={scope} />
            </div>
            <div className="input-row">
                <label>Category</label>
                <DropdownInput options={options} value={scope} />
            </div>
        </div>
    );
};

export default PresetInput;