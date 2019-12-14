// React
import * as React from 'react';
// DOM
import './FretboardDriver.css';
// Play What
import { Fretboard } from 'play-what-beta';
// Theory
import { KeyCenter } from '../../Theory/Classes/KeyCenter'
import { NoteStrategies } from '../../Theory/Strategies/NoteStrategies';
import { ActionStrategies } from '../../Theory/Strategies/ActionStrategies';
import { INTERVAL_PAIR, CHORD, SCALE, MODE } from '../../Theory/Constants/Presets';
import { TONIC, ACCIDENTAL } from '../../Theory/Constants/Enums';
// Fretboard
import { FretboardColorStrategies, FretboardLabelStrategies, FretboardFilterStrategies } from './FretboardStrategies';

/* Component */

export function FretboardDriver(props) {

    // Key Center
    let keyCenter = new KeyCenter(
        TONIC.C,
        ACCIDENTAL.Natural,
        3
    );

    // Concept
    let concept = CHORD.Maj7;

    // Note
    let noteStrategy = (noteIndex) => NoteStrategies.getNoteAt(keyCenter, concept, noteIndex, false);
    let noteFilter = () => true;

    // Label
    let labelStrategy = FretboardLabelStrategies.interval;

    // Color
    let colorStrategy = FretboardColorStrategies.degree;

    // Action
    let actionStrategy = ActionStrategies.sound;

    return (
        <div className='fretboard-driver'>
            <Fretboard
                labelStrategy={labelStrategy}
                colorStrategy={colorStrategy}
                noteStrategy={noteStrategy}
                noteFilter={noteFilter}
                actionStrategy={actionStrategy}
            />
        </div>
    );
}