import React from 'react';
import './Guitar.css';
import PW from 'play-what';

const { Theory, Constants, Presets } = PW.v2;

import Viewers from 'play-what-react-viewers';

const Fretboard = Viewers.v2.Fretboard.Viewer;

const NOTES = Theory.addVectorsBatch(Presets.KEY_CENTERS.A, Presets.SCALE.NaturalMinor.intervals);

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