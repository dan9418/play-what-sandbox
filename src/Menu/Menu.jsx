import React, { useState } from 'react';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';

export const ZOOM_VALUES = [
    {
        id: 'chart',
        name: 'Chart',
        label: '••••'
    },
    {
        id: 'section',
        name: 'Section',
        label: '•••'
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••'
    },
    {
        id: 'concept',
        name: 'Concept',
        label: '•'
    }
];

const Menu = () => {

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const [zoom, setZoom] = useState(ZOOM_VALUES[0]);

    return (
        <div className={`menu pw-lighter ${open && 'open'}`}>
            {open &&
                <>
                    <div className="menu-header pw-secondary">
                        <div className="zoom-selector">
                            {ZOOM_VALUES.map((z, i) => {
                                return (
                                    <ButtonInput
                                        key={i}
                                        onClick={() => setZoom(z)}
                                        className={zoom.id === z.id ? 'pw-accent' : 'pw-secondary'}>
                                        {`${z.label}`}
                                    </ButtonInput>
                                );
                            })}
                        </div>
                    </div>
                </>
            }
            <div className={`tab pw-secondary pw-hov`} onClick={toggleOpen} >{open ? '-' : '+'}</div>
        </div>
    );
}

export default Menu;
