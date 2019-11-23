import * as React from "react";
import { LABEL_STRATEGIES, COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { DropdownSelector } from "./DropdownSelector";

const STRATEGIES = Object.values(LABEL_STRATEGIES);

export function LabelStrategySelector(props) {
    return (
        <div>

            <div className='play-what-input'>
                <div className='play-what-input-label'>
                    Label Strategy:
					</div>
                <DropdownSelector
                    values={STRATEGIES}
                    setValue={(value) => {
                        props.setLabelStrategy(() => value);
                    }}
                />
            </div>

        </div>
    );
}