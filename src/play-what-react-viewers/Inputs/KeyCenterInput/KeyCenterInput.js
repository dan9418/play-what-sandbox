import * as React from 'react';
import './KeyCenterInput.css';
import { NumericInput } from '../NumericInput/NumericInput';
import { DropdownInput } from '../DropdownInput/DropdownInput';
import KeyCenter from '../../../play-what/Theory/KeyCenter';
import { TONIC, ACCIDENTAL } from '../../../play-what/Theory/Constants';

const TONIC_DATA = Object.values(TONIC);
const ACCIDENTAL_DATA = Object.values(ACCIDENTAL);

export function KeyCenterInput(props) {
    return (
        <div className='key-center-input'>
            <div className='input-row'>
                <label>Tonic:</label>
                <DropdownInput
                    data={TONIC_DATA}
                    value={props.value.tonic}
                    setValue={(tonic) => props.setValue(new KeyCenter(tonic, props.value.accidental, props.value.octave))}
                />
            </div>
            <div className='input-row'>
                <label>Accidental:</label>
                <DropdownInput
                    data={ACCIDENTAL_DATA}
                    value={props.value.accidental}
                    setValue={(accidental) => props.setValue(new KeyCenter(props.value.tonic, accidental, props.value.octave))}
                />
            </div>
            <div className='input-row'>
                <label>Octave:</label>
                <NumericInput
                    value={props.value.octave}
                    setValue={(octave) => props.setValue(new KeyCenter(props.value.tonic, props.value.accidental, octave))}
                    min='0'
                    max='10'
                />
            </div>
        </div>
    );
}