import * as React from 'react';
import './ButtonList.css';
import BoxButton from '../BoxButton/BoxButton';

export default function ButtonList(props) {
    return (
        <div
            className='button-list'
        >
            {props.data.map(d => <BoxButton key={d.id} text={d.name} selected={props.selected.id === d.id} action={() => props.setValue(d)} />)}
        </div>
    );
}