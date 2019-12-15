import * as React from 'react';
import './ViewDriver.css';

export class ViewDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialState || {};
    }

    setValue(propertyId, value) {
        let newState = {...this.state};
        newState[propertyId] = value;
        this.setState(newState);
    }

    getInputs(children = []) {
        let inputs = [];
        for(let i = 0; i < children.length; i++) {
            let child = children[i];
            let Comp = child.component;
            inputs.push(<Comp key={child.id} value={this.state[child.id]} setValue={(value) => this.setValue(child.id, value)}/>);
        }
        return inputs;
    }

    render() {
        let Viewer = this.props.viewer;
        return (
            <div className='view-driver'>
                <div className='inputs'>
                    {this.getInputs(this.props.inputs)}
                </div>
                <div className='viewer'>
                    <Viewer {...this.state} />
                </div>
            </div>
        );
    }
}