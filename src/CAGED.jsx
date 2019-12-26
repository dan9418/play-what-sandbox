import * as React from 'react';
import './App.css';
import { Theory, Strategies, Utils } from 'play-what';
import { Fretboard, Inputs, ViewController } from 'play-what-react-viewers';

const FRETBOARD_INPUTS = [
    {
        id: 'keyCenter',
        name: 'Key Center',
        component: Inputs.KeyCenter
    }
];

export default function CAGED() {
    let concept = Theory.Presets.CHORD.Maj7;
    let mapStrategy = Strategies.MapBy.pitchClass;
    let colorStrategy = Fretboard.Strategies.ColorBy.degree;
    let strings = [
        { tuning: 16 },   // e
        { tuning: 11 },   // B
        { tuning: 7 },    // G
        { tuning: 2 },    // D
        { tuning: -3 },   // A
        { tuning: -8 }    // E
    ];

    return (
        <div className='caged'>
            <h1>CAGED Positions</h1>
            <Fretboard.Viewer
                fretLow={0}
                fretHigh={3}
                concept={concept}
                mapStrategy={mapStrategy}
                colorStrategy={colorStrategy}
                strings={strings}
            />
            <Fretboard.Viewer
                fretLow={3}
                fretHigh={6}
                concept={concept}
                mapStrategy={mapStrategy}
                colorStrategy={colorStrategy}
                strings={strings}
            />
            <Fretboard.Viewer
                fretLow={5}
                fretHigh={8}
                concept={concept}
                mapStrategy={mapStrategy}
                colorStrategy={colorStrategy}
                strings={strings}
            />
            <Fretboard.Viewer
                fretLow={8}
                fretHigh={11}
                concept={concept}
                mapStrategy={mapStrategy}
                colorStrategy={colorStrategy}
                strings={strings}
            />
            <Fretboard.Viewer
                fretLow={10}
                fretHigh={13}
                concept={concept}
                mapStrategy={mapStrategy}
                colorStrategy={colorStrategy}
                strings={strings}
            />
        </div>
    );
}