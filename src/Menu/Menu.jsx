import React, { useState } from 'react';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';
import ZoomInput from '../UI/ZoomInput/ZoomInput';
import { ZOOM } from '../Common/State';


const Menu = () => {

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const [zoom, setZoom] = useState(ZOOM.Chart);

    return (
        <div className={`menu pw-lighter ${open && 'open'}`}>
            {open &&
                <>
                    <div className="zoom-container">
                        <ZoomInput zoom={zoom} setZoom={setZoom} />
                    </div>
                </>
            }
            <div className={`tab pw-secondary pw-hov`} onClick={toggleOpen} >{open ? '-' : '+'}</div>
        </div>
    );
}

export default Menu;
