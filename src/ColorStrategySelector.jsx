import * as React from "react";
import { COLOR_STRATEGIES, TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { DropdownSelector } from "./DropdownSelector";

const STRATEGIES = Object.values(COLOR_STRATEGIES);

export function ColorStrategySelector(props) {
    return (
        <div>

            <div className='play-what-input'>
                <div className='play-what-input-label'>
                    Color Strategy:
					</div>
                <DropdownSelector
                    values={STRATEGIES}
                    setValue={(value) => {
                        props.setColorStrategy(() => value);
                    }}
                />
            </div>

        </div>
    );
}