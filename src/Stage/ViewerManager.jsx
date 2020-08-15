import React from 'react';
import './Stage.css';
import { useRecoilValue } from 'recoil';
import { sourcesState, _sources } from '../Common/State';
import ReactJson from 'react-json-view'

const ViewerManager = () => {
    const sources = useRecoilValue(sourcesState);
    const rawSources = useRecoilValue(_sources);

    return (
        <div className="viewer-manager">
            <div className="viewer-list">
                <div>
                    <h1>Input</h1>
                    <ReactJson src={rawSources[0]} name="Source" />
                </div>
                <div>
                    <h1>Output</h1>
                    <ReactJson src={sources[0]} name="Props" />
                </div>
            </div>
        </div>
    );
};

export default ViewerManager;
