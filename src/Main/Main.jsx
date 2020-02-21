import React, { useState } from 'react';
import './Main.css';

import Controllers from './Controllers/_module';
import Common from './Common/_module';

const CONTROLLERS = [
    {
        id: 'summary',
        name: 'Summary',
        component: Controllers.Summary.Controller
    },
    {
        id: 'noteTable',
        name: 'Note Table',
        component: Controllers.NoteTable.Controller
    },
    {
        id: 'chordAnalysis',
        name: 'Chord Analysis',
        component: Controllers.ChordAnalysis.Controller
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        component: Controllers.Fretboard.Controller
    },
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: Controllers.Keyboard.Controller
    }
];

const getControllers = (controllerData) => {
    let controllers = [];
    for (let i = 0; i < controllerData.length; i++) {
        const Controller = controllerData[i].component;
        controllers.push(<Controller key={i} />);
    }
    return controllers;
}

const ControllerSelector = props => {
    return (
        <div className='controller-selector'>
            <div className='label'>Add a Viewer:</div>
            <Common.Inputs.DropdownInput data={CONTROLLERS} value={null} setValue={props.addController} />
        </div>
    );
}

export default function Main() {

    const [controllers, setControllers] = useState([CONTROLLERS[3]]);

    return (
        <div className='controller-manager'>
            <div className="top-nav">Play What</div>
            <div className="stage">
                {getControllers(controllers)}
                {/*<ControllerSelector addController={(controller) => setControllers([...controllers, controller])} />*/}
            </div>
        </div>
    );
}
