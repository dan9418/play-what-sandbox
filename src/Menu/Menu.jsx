import React, { useState } from 'react';
import './Menu.css';
import ZoomSelector from './ZoomSelector';

const Menu = () => {

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    return (
        <div className={`menu pw-lighter ${open && 'open'}`}>
            {open &&
                <>
                    <div className="menu-header pw-secondary">
                        <ZoomSelector />
                    </div>
                </>
            }
            <div className={`tab pw-secondary pw-hov`} onClick={toggleOpen} >{open ? '-' : '+'}</div>
        </div>
    );
}

export default Menu;
