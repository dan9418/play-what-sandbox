import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import { useRecoilState, useRecoilValue } from 'recoil';
import { rawSourceState, parsedSourceState } from '../Common/State';
import ErrorBoundary from '../UI/ErrorBoundary';
import './Stage.css';

const Level = ({ parsedLevel }) => {
    if (typeof parsedLevel === 'string' || typeof parsedLevel === 'number' || parsedLevel === null)
        return parsedLevel;

    const { component, children, props } = parsedLevel;
    const isComponent = !!component;

    const Component = isComponent ? component : React.Fragment;
    const newProps = isComponent ? props : {};
    const newChildren = children ? children.map((c, i) => <Level parsedLevel={c} />) : null;

    return (
        <Component {...newProps}>
            {newChildren}
        </Component>
    );
};


/*{
    updated_src: src, //new src value
    name: name, //new var name
    namespace: namespace, //list, namespace indicating var location
    new_value: new_value, //new variable value
    existing_value: existing_value, //existing variable value
}*/


const ViewerManager = () => {

    const [rawSource, setRawSource] = useRecoilState(rawSourceState);
    const parsedSource = useRecoilValue(parsedSourceState);

    const [isPreviewOpen, setIsPreviewOpen] = useState(true);

    const onEdit = (args) => {
        console.log(args);
        try {
            setRawSource(args.updated_src);
        }
        catch (e) {
            console.error('Can\'t update json', e);
        }
        return true;
    };


    return (
        <div className="viewer-manager">

            <div className="viewer-grid">
                <div>
                    <div className='header'>
                        <h1>Input</h1>
                    </div>
                    <ErrorBoundary>
                        <div className="json-wrapper">
                            <ReactJson src={rawSource} name="Source" onEdit={onEdit} collapsed={1}/>
                        </div>
                    </ErrorBoundary>
                </div>
                <div>
                    <div className='header'>
                        <h1>Output</h1>
                        <ButtonInput onClick={() => setIsPreviewOpen(!isPreviewOpen)} className="pw-accent">{isPreviewOpen ? 'Config' : 'Preview'}</ButtonInput>
                    </div>
                    <ErrorBoundary>
                        <div className="json-wrapper">
                            {isPreviewOpen && <Level parsedLevel={parsedSource} />}
                            {!isPreviewOpen && <ReactJson src={parsedSource} name="Props" collapsed/>}
                        </div>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
};

export default ViewerManager;
