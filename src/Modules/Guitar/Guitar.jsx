import React from 'react';
import './Guitar.css';
import PW from 'play-what';

import Viewers from 'play-what-react-viewers';

const Fretboard = Viewers.v2.Fretboard.Viewer;

const NOTES = PW.Theory.addVectorsBatch(PW.Presets.KEY_CENTERS.A, PW.Presets.SCALE.NaturalMinor.intervals);

const Guitar = () => {
    console.log('notes', NOTES);
    return (
        <div className="guitar">
            <Fretboard 
                notes={NOTES}
            />
        </div>
    )
}

export default Guitar;