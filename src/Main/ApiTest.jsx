import React from 'react';
import './Main.css';
import { useRecoilValue } from 'recoil';
import { sourcesState } from '../Common/State';

const ApiTest = () => {
    const sources = useRecoilValue(sourcesState);
    return (
        <pre>
            {JSON.stringify(sources, null, 2)}
        </pre>
    );
};

export default ApiTest;
