import * as React from "react";
import { TONIC, ACCIDENTAL, NOTE_LABEL, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';
import { DropdownSelector } from "./DropdownSelector";

const TONICS = Object.values(TONIC);
const ACCIDENTALS = Object.values(ACCIDENTAL);

export function KeyCenterSelector(props) {
    return (
        <div>
            <div className='play-what-input-header'>Key Center:</div>

            <div className='play-what-input'>
                <div className='play-what-input-label'>
                    Tonic:
					</div>
                <DropdownSelector
                    values={TONICS}
                    setValue={(value) => {
                        props.setKeyCenter(
                            Object.assign({}, props.keyCenter, { tonic: value })
                        );
                    }}
                />
            </div>

            <div className='play-what-input'>
                <div className='play-what-input-label'>
                    Accidental:
					</div>
                <DropdownSelector
                    values={ACCIDENTALS}
                    setValue={(value) => {
                        props.setKeyCenter(
                            Object.assign({}, props.keyCenter, { accidental: value })
                        );
                    }}
                />
            </div>
        </div>
    );
}