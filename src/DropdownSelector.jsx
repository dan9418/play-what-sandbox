import * as React from "react";

function getSelectOptions(data) {
    let options = [];
    for (let i = 0; i < data.length; i++) {
        let datum = data[i];
        options.push(<option key={i} value={datum.id}>{datum.name}</option>);
    }
    return options;
}

export function DropdownSelector(props) {
    return (
        <select
            className='dropdown-selector'
            onChange={(event) => {
                props.setValue(props.values[event.target.selectedIndex], event.target.selectedIndex)
            }}>
            {getSelectOptions(props.values)}
        </select>
    );
}