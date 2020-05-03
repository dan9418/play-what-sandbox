import React from 'react';
// import './Dropdown.css';

const Dropdown = props => {
    const { value, setValue, options } = props;

    return (
        <select
            className='dropdown'
            onChange={e => setValue(options[e.target.selectedIndex])}
            value={value ? value.id : ''}
        >
            {options.map((v, i) => (
                <option key={i} value={v.id}>{v.name}</option>
            ))}
        </select>
    );
}

export default Dropdown;