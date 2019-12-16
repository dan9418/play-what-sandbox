import * as React from 'react';

import {
    KeyCenter,
    TONIC,
    ACCIDENTAL,
    INTERVAL_PAIR,
    CHORD,
    SCALE,
    MODE,
    NoteStrategies
} from "../../../play-what/index";
import { DropdownInput } from '../DropdownInput/DropdownInput';

export class StrategyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='note-strategy-input'>
                <DropdownInput
                    data={this.props.data}
                    value={null}
                    setValue={(value) => this.props.setValue(value.fx)}
                />
            </div>
        );
    }
}