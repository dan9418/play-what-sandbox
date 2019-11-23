import * as React from "react";
import { TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { useState } from "react";
import { DropdownSelector } from "./DropdownSelector";

const PLAY_WHAT_CONCEPTS = [
    {
        id: 'chords',
        name: 'Chords',
        data: CHORD
    },
    {
        id: 'scales',
        name: 'Scales',
        data: SCALE
    },
    {
        id: 'modes',
        name: 'Modes',
        data: MODE
    },
    {
        id: 'romanNumerals',
        name: 'Roman Numerals',
        data: ROMAN_NUMERAL
    },
    {
        id: 'intervalPairs',
        name: 'Intervals',
        data: INTERVAL_PAIR
    }
];

export function ConceptSelector(props) {
    const [typeIndex, setTypeIndex] = useState(0);
    let activeConcepts = Object.values(PLAY_WHAT_CONCEPTS[typeIndex].data);

    return (
        <div>
            <div className='play-what-input-header'>Concept:</div>

            <div className='play-what-input'>
                <div className='play-what-input-label'>
                    Type:
					</div>
                <DropdownSelector
                    values={PLAY_WHAT_CONCEPTS}
                    setValue={(value, index) => {
                        setTypeIndex(index);
                    }}
                />
            </div>

            <div className='play-what-input'>
                <div className='play-what-input-label'>
                    Intervals:
				</div>
                <DropdownSelector
                    values={activeConcepts}
                    setValue={(value) => {
                        props.setConcept(
                            Object.assign({}, props.concept, { intervals: value.intervals })
                        );
                    }}
                />
            </div>
        </div>
    );
}