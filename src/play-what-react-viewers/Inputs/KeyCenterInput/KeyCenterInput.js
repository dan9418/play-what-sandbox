import * as React from 'react';
import './KeyCenterInput.css';
import { NumericInput } from '../NumericInput/NumericInput';
import { DropdownInput } from '../DropdownInput/DropdownInput';
import { TONIC, ACCIDENTAL } from '../../Theory/Constants/Enums';

const TONIC_DATA = Object.values(TONIC);
const ACCIDENTAL_DATA = Object.values(ACCIDENTAL);

export function KeyCenterInput(props) {
    return (
        <div className='key-center-input'>
            <div className='input-title'>
                Key Center
            </div>
            <div className='input-row'>
                <label>Tonic:</label>
                <DropdownInput data={TONIC_DATA} value={props.tonic} setValue={props.setTonic}/>
            </div>
            <div className='input-row'>
                <label>Accidental:</label>
                <DropdownInput data={ACCIDENTAL_DATA} value={props.accidental} setValue={props.setAccidental}/>
            </div>
            <div className='input-row'>
                <label>Octave:</label>
                <NumericInput setValue={props.setOctave} value={props.octave} min='0' max='10'/>
            </div>
        </div>
    );
}