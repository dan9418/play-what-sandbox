import * as React from 'react';
import './DropdownInput.css';

// INPUT data = array of objects
// INPUT value = selected object
// OUTPUT setValue => newly selected object
export default function DropdownInput(props) {
    return (
        <select
            className='dropdown-input'
            value={props.value ? props.value.id : undefined}
            onClick={(e) => {
                if (e.target && e.target.selectedIndex >= 1) {
                    props.setValue(props.data[e.target.selectedIndex]);
                }
            }}
        >
            {getDropdownOptions(props.data)}
        </select>
    );
}

function getDropdownOptions(data) {
    let options = [];
    for (let i = 0; i < data.length; i++) {
        let { id, name } = data[i];
        options.push(<option key={id} value={id}>{name}</option>)
    }
    return options;
}