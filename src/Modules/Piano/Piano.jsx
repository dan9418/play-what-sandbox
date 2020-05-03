import React from 'react';
import './Piano.css';
import PW from 'play-what';

import Viewers from 'play-what-react-viewers';

const NOTES = PW.Theory.addVectorsBatch(PW.Presets.KEY_CENTERS.A, PW.Presets.SCALE.NaturalMinor.intervals);

const Piano = () => {
    console.log('notes', NOTES);
    return (
        <div className="piano">
            <Viewers.Keyboard 
                notes={NOTES}
            />
        </div>
    )
}

export default Piano;