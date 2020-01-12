import React, { useState } from 'react';
import './Page.css';

// Viewers
import DropdownInput from 'play-what-react-viewers/src/Inputs/DropdownInput/DropdownInput';

// Controllers
import FretboardController from './Controllers/FretboardController';
import KeyboardController from './Controllers/KeyboardController';
import SummaryController from './Controllers/SummaryController';
import NoteDataController from './Controllers/NoteDataController';
import ChordAnalysisController from './Controllers/ChordAnalysisController';

const VIEWERS = [
    {
        id: 'summary',
        name: 'Summary',
        component: SummaryController
    },
    {
        id: 'noteData',
        name: 'Note Data',
        component: NoteDataController
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
            <DropdownInput data={VIEWERS} value={viewer} setValue={setViewer} />
            <br />
            <Viewer />
        </div>
    );
}
