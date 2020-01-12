import React, { useState } from 'react';
import './Page.css';

// Inputs
import Inputs from './Inputs/_module';

// Controllers
import FretboardController from './Controllers/FretboardController';
import KeyboardController from './Controllers/KeyboardController';
import SummaryController from './Controllers/SummaryController';
import NoteTableController from './Controllers/NoteTableController';
import ChordAnalysisController from './Controllers/ChordAnalysisController';

const VIEWERS = [
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


export default function Page(props) {

    const [viewer, setViewer] = useState(VIEWERS[0]);

    const Viewer = viewer.component;

    return (
        <div className='play-what-sample'>
            <Inputs.DropdownInput data={VIEWERS} value={viewer} setValue={setViewer} />
            <br />
            <Viewer />
        </div>
    );
}
