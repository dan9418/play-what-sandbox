import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import { useRecoilState, useRecoilValue } from 'recoil';
import { rawSourceState, parsedSourceState } from '../Common/State';
import ErrorBoundary from '../UI/ErrorBoundary';
import './Stage.css';

const Level = ({ component, children, props, ...other }) => {
    const Component = component ? component : React.Fragment;
    const newProps = component ? props : {};
    return (
        <Component {...newProps}>
            {children && children.map((c, i) => <Level {...c} />)}
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
                            <ReactJson src={rawSource} name="Source" onEdit={onEdit} />
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
                            {isPreviewOpen && <Level {...parsedSource} />}
                            {!isPreviewOpen && <ReactJson src={parsedSource} name="Props" />}
                        </div>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
};

export default ViewerManager;
