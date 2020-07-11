import React from 'react';
import './Dropdown.css';

const Dropdown = props => {
    const { value, setValue, options, displayProperty } = props;

    return (
        <select
            className='dropdown-input pw-lightest'
            onChange={e => setValue(options[e.target.selectedIndex])}
            value={value ? value.id : ''}
        >
            {options.map((v, i) => (
                <option key={i} value={v.id}>{displayProperty ? v[displayProperty] : v.name}</option>
            ))}
        </select>
    );
}

export default Dropdown;