import React from 'react';
import ReactJson from 'react-json-view';
import { useRecoilState, useRecoilValue } from 'recoil';
import { rawSourceState, parsedSourceState } from '../Common/State';
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

    const onEdit = (args) => {
        console.log(args);
        setRawSource(args.updated_src);
        return true;
    };


    return (
        <div className="viewer-manager">
            <Level {...parsedSource} />
            <div className="viewer-list">
                <div>
                    <h1>Input</h1>
                    <ReactJson src={rawSource} name="Source" onEdit={onEdit} />
                </div>
                <div>
                    <h1>Output</h1>
                    <ReactJson src={parsedSource} name="Props" />
                </div>
            </div>
        </div>
    );
};

export default ViewerManager;
