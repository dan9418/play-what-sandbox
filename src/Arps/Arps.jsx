import * as React from 'react';
import './Arps.css';
import PlayWhat from 'play-what';
import { Fretboard, Inputs, ViewController } from 'play-what-react-viewers';

let PROPS = {
    fretLow: 7,
    fretHigh: 10,
    mapStrategy: PlayWhat.MapBy.pitchClass,
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

export default function Arps(props) {
    let concept = PlayWhat.Presets.SCALE.Major;
    return (
        <div className='arps'>
            <Fretboard.Viewer concept={concept} {...PROPS} />
            <Fretboard.Viewer concept={concept.getRomanNumeral(1)} {...PROPS} />
            <Fretboard.Viewer concept={concept.getRomanNumeral(2)} {...PROPS} />
            <Fretboard.Viewer concept={concept.getRomanNumeral(3)} {...PROPS} />
            <Fretboard.Viewer concept={concept.getRomanNumeral(4)} {...PROPS} />
            <Fretboard.Viewer concept={concept.getRomanNumeral(5)} {...PROPS} />
            <Fretboard.Viewer concept={concept.getRomanNumeral(6)} {...PROPS} />
            <Fretboard.Viewer concept={concept.getRomanNumeral(7)} {...PROPS} />
        </div>
    );
}