import * as React from 'react';
import './CAGED.css';
import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Inputs, ViewController } from 'play-what-react-viewers';

let PROPS = {
    mapStrategy: Strategies.MapBy.pitchClass,
    colorStrategy: Fretboard.Strategies.ColorBy.degree,
    showFretNumbers: false,
    showDots: false,
    strings: [
        { tuning: 16 },   // e
        { tuning: 11 },   // B
        { tuning: 7 },    // G
        { tuning: 2 },    // D
        { tuning: -3 },   // A
        { tuning: -8 }    // E
    ]
};

const FRET_RANGES = [
    [0, 3],
    [2, 5],
    [4, 8],
    [7, 10],
    [9, 13]
];

const CONFIG = [
    {
        concept: Theory.Presets.CHORD.Maj7,
        fretRanges: [
            [0, 3],
            [2, 5],
            [4, 8],
            [7, 10],
            [9, 13]
        ]
    },
    {
        concept: Theory.Presets.CHORD.Min7,
        fretRanges: [
            [0, 4],
            [3, 6],
            [5, 8],
            [8, 11],
            [10, 13]
        ]
    },
    {
        concept: Theory.Presets.CHORD.Dom7,
        fretRanges: [
            [0, 3],
            [2, 6],
            [5, 8],
            [7, 10],
            [10, 14]
        ]
    },
    {
        concept: Theory.Presets.CHORD.HalfDim7,
        fretRanges: [
            [1, 4],
            [3, 7],
            [4, 8],
            [8, 11],
            [9, 13]
        ]
    },
    {
        concept: Theory.Presets.CHORD.Dim7,
        fretRanges: [
            [0, 3],
            [2, 5],
            [5, 9],
            [8, 12],
            [9, 13]
        ]
    },
    {
        concept: Theory.Presets.CHORD.Aug7,
        fretRanges: [
            [0, 4],
            [2, 6],
            [4, 8],
            [7, 11],
            [10, 14]
        ]
    },
    {
        concept: Theory.Presets.CHORD.AugM7,
        fretRanges: [
            [0, 4],
            [2, 6],
            [4, 8],
            [7, 11],
            [10, 14]
        ]
    }
]

function getViewers(concept) {
    let viewers = [];
    for (let i = 0; i < concept.fretRanges.length; i++) {
        viewers.push(
            <Fretboard.Viewer
                key={i}
                concept={concept.concept}
                fretLow={concept.fretRanges[i][0]}
                fretHigh={concept.fretRanges[i][1]}
                {...PROPS}
            />
        );
    }
    return viewers;
}

function getViewerGroups(concepts) {
    let viewers = [];
    for (let i = 0; i < concepts.length; i++) {
        let concept = concepts[i];
        viewers.push(
            <div key={concept.concept.id} className='viewer-group'>
                <h2>{concept.concept.name}</h2>
                <div className='sample'>
                    <Fretboard.Viewer
                        concept={concept.concept}
                        {...PROPS}
                        fretHigh={14}
                    />
                </div>
                <div className='sample-list'>
                    {getViewers(concept)}
                </div>
            </div>
        );
    }
    return viewers;
}

export default function CAGED() {
    return (
        <div className='caged'>
            <h1>CAGED Positions</h1>
            {getViewerGroups(CONFIG)}
        </div>
    );
}