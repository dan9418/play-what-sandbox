import React, { useState } from 'react';
import './Page.css';
import Section from './Section/Section';
import InputRow from './InputRow/InputRow';

import PlayWhat from 'play-what';
import { Fretboard, Keyboard, Inputs, ViewController, ChordAnalysis, ConceptBlock, NoteTable } from 'play-what-react-viewers';
import KeyCenterPanel from './Panels/KeyCenterPanel';
import ConceptPanel from './Panels/ConceptPanel';
import FretboardPanel from './Panels/FretboardPanel';
import KeyboardPanel from './Panels/KeyboardPanel';
import SummaryPanel from './Panels/SummaryPanel';

const CONCEPT_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        presets: Object.values(PlayWhat.Presets.INTERVAL_PAIR),
        defaultOptions: {
            reverse: false
        }
    },
    {
        id: 'chord',
        name: 'Chord',
        presets: Object.values(PlayWhat.Presets.CHORD),
        defaultOptions: {
            chordInversion: 0
        }
    },
    {
        id: 'scale',
        name: 'Scale',
        presets: Object.values(PlayWhat.Presets.SCALE),
        defaultOptions: {
            reverse: false
        }
    },
    {
        id: 'mode',
        name: 'Mode',
        presets: Object.values(PlayWhat.Presets.MODE),
        defaultOptions: {
            reverse: false
        }
    }
];

const VIEWERS = [
    {
        id: 'summary',
        name: 'Summary',
        component: SummaryPanel
    },
    {
        id: 'noteData',
        name: 'Note Data',
        component: NoteTable
    },
    {
        id: 'chordAnalysis',
        name: 'Chord Analysis',
        component: ChordAnalysis
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        component: FretboardPanel
    },
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: KeyboardPanel
    }
];

export default function Page(props) {

    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState({
        type: CONCEPT_TYPES[2],
        value: CONCEPT_TYPES[2].presets[0],
        options: CONCEPT_TYPES[2].defaultOptions
    })

    return (
        <div className='play-what-sample'>

            <div className='header'>Inputs</div>

            <KeyCenterPanel
                keyCenter={keyCenter}
                setKeyCenter={(tonic, accidental, octave) => setKeyCenter(new PlayWhat.KeyCenter(tonic, accidental, octave))}
            />

            <ConceptPanel
                data={CONCEPT_TYPES}
                conceptData={conceptData}
                setConceptData={(type, value, options) => setConceptData({ type: type, value: value, options: options })}
            />

            <div className='header'>Outputs</div>

            {
                VIEWERS.map(viewer => {
                    let Comp = viewer.component;
                    return (
                        <Section header={viewer.name}>
                            <Comp
                                keyCenter={keyCenter}
                                concept={conceptData.value}
                            />
                        </Section>
                    );
                })
            }

            <Section header='Note Data'>
                <NoteTable
                    keyCenter={keyCenter}
                    concept={conceptData.value}
                />
            </Section>



        </div>
    );
}