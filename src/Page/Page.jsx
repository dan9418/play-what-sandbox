import React, { useState } from 'react';
import './Page.css';
import Section from './Section/Section';
import InputRow from './InputRow/InputRow';

import PlayWhat from 'play-what';
import { Fretboard, Keyboard, Inputs, ViewController, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';

import FretboardController from './Controllers/FretboardController';
import DropdownInput from 'play-what-react-viewers/src/Inputs/DropdownInput/DropdownInput';
import KeyboardController from './Controllers/KeyboardController';
import SummaryController from './Controllers/SummaryController';

const VIEWERS = [
    {
        id: 'summary',
        name: 'Summary',
        component: SummaryController
    },
    /*{
        id: 'noteData',
        name: 'Note Data',
        component: NoteTable
    },
    {
        id: 'chordAnalysis',
        name: 'Chord Analysis',
        component: ChordAnalysis
    },*/
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
