import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { scopeState, sourceState } from '../../Common/State';
import PresetInput from '../../UI/PresetInput/PresetInput';
import './SourceTab.css';

const SourceTab = () => {
    const source = useRecoilValue(sourceState);
    const [scope, setScope] = useRecoilState(scopeState);

    return (
        <div className="tab-body source-tab">
            <PresetInput />
        </div>
    );
};

export default SourceTab;