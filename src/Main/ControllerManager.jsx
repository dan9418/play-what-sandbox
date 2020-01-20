import React, { useState } from 'react';
import './ControllerManager.css';

// Inputs
import Inputs from './Inputs/_module';

// Controllers
import FretboardController from './Controllers/FretboardController';
import KeyboardController from './Controllers/KeyboardController';
import SummaryController from './Controllers/SummaryController';
import NoteTableController from './Controllers/NoteTableController';
import ChordAnalysisController from './Controllers/ChordAnalysisController';

const CONTROLLERS = [
    {
        id: 'summary',
        name: 'Summary',
        component: SummaryController
    },
    {
        id: 'noteTable',
        name: 'Note Table',
        component: NoteTableController
    },
    {
        id: 'chordAnalysis',
        name: 'Chord Analysis',
        component: ChordAnalysisController
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        component: FretboardController,
    },
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: KeyboardController
    }
];


export default function ControllerManager(props) {

    const [controller, setController] = useState(CONTROLLERS[3]);

    const Controller = controller.component;

    return (
        <div className='controller-manager'>
            <div className='title'>
                <Inputs.DropdownInput data={CONTROLLERS} value={controller} setValue={setController} />
            </div>
            <Controller />
        </div>
    );
}
