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

export class StrategyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='note-strategy-input'>
                <div className='input-title'>
                    Mapping Strategy
                </div>
            </div >
        );
    }
}