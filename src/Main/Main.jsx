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


export default function Main() {

    const [controller, setController] = useState(CONTROLLERS[3]);

    const Controller = controller.component;

    return (
        <div className='controller-manager'>
            <div className='title'>
                <Common.Inputs.DropdownInput data={CONTROLLERS} value={controller} setValue={setController} />
            </div>
            <Controller />
        </div>
    );
}
