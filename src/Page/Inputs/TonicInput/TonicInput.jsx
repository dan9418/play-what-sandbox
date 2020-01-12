import * as React from 'react';
import './TonicInput.css';
import ButtonList from '../ButtonList/ButtonList';
import PlayWhat from 'play-what';

export default function TonicInput(props) {
    return (
        <div className='input tonic'>
            <ButtonList
                selected={props.value}
                data={Object.values(PlayWhat.Constants.TONIC)}
                setValue={props.setValue}
            />
        </div>
    );
}