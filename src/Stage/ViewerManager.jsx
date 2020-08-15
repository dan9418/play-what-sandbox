import React from 'react';
import './Stage.css';
import { useRecoilValue } from 'recoil';
import { sourcesState } from '../Common/State';

const getLevelAttrs = output => {
    return Object.entries(output).map(([key, value], i) => {
        return (
            <div className="level-attr">
                <div className="level-attr-key">{key}</div>
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </div>
        );
    });
}

const SourceViewer = ({ source, level }) => {
    const { children, name, ...output } = source;
    const attrs = getLevelAttrs(output);
    const childComps = children && children.map((c, i) => {
        return <SourceViewer source={c} level={level + 1} />;
    });
    return (
        <div className={`level`} style={{}}>
            <h2>{name}</h2>
            {attrs}
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
