import * as React from 'react';
import './AccidentalInput.css';
import ButtonList from '../ButtonList/ButtonList';
import PlayWhat from 'play-what';

export default function AccidentalInput(props) {
    return (
        <div className='input accidental'>
            <ButtonList
                selected={props.value}
                data={Object.values(PlayWhat.Constants.ACCIDENTAL)}
                setValue={props.setValue}
            />
        </div>
    );
}