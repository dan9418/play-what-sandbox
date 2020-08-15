import React from 'react';
import './Stage.css';
import { useRecoilValue } from 'recoil';
import { sourcesState } from '../Common/State';

const getLevelAttrs = output => {
    const out = Object.entries(output).map(([key, value], i) => {
        return (
            <div className="level-attr">
                <div className="level-attr-key">{key}</div>
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </div>
        );
    });
    return out.length ? out : 'n/a';
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
            <h3>Attributes:</h3>
            {attrs}
            {childComps && (

                <div className="level-children">
                    <h3>Children</h3>
                    {childComps}
                </div>
            )}
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
