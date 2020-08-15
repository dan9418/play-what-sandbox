import React from 'react';
import './Stage.css';
import { useRecoilValue } from 'recoil';
import { sourcesState } from '../Common/State';

const SourceViewer = ({ source, level }) => {
    const { children, ...output } = source;
    const childComps = children && children.map((c, i) => {
        return <SourceViewer source={c} level={level + 1} />;
    });
    return (
        <div className={`viewer`}>
            <pre>
                {JSON.stringify(output, null, 2)}
            </pre>
            {childComps}
        </div>
    );
};

const ViewerManager = () => {
    const sources = useRecoilValue(sourcesState);

    return (
        <div className="viewer-manager">
            <div className="viewer-list">
                <SourceViewer source={sources[0]} level={0} />
            </div>
        </div>
    );
};

export default ViewerManager;
