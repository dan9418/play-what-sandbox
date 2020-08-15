import React from 'react';
import './Stage.css';
import { useRecoilValue } from 'recoil';
import { sourcesState } from '../Common/State';

const getLevelAttrs = output => {

}

const SourceViewer = ({ source, level }) => {
    const { name, ...output } = source;
    const attrs = Object.entries(output).map(([key, value], i) => {
        const type = typeof value;
        if (type === 'number' || type === 'string' || type === 'bool') {
            return (
                <div className="level-attr">
                    {`${key}: ${value}`}
                </div>
            );
        }
        if (Array.isArray(value)) {
            return (
                <div className="level-attr">
                    <h3 className="level-attr-key">{key}</h3>
                    {value.map((v, i) => <SourceViewer source={v} level={level + 1} />)}
                </div>
            );
        }
        return (
            <div className="level-attr">
                <h3 className="level-attr-key">{key}</h3>
                <SourceViewer source={value} level={level + 1} />
            </div>
        );
    });
    return (
        <div className={`level`} style={{}}>
            <h2>{name}</h2>
            {attrs.length ? attrs : 'n/a'}
        </div >
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
