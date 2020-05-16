import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';

import Common from '../Common/_module';
import './NavBar.css';

const NavBar = () => {
    const [modalOpen, setModalOpen] = useState(true);
    return (
        <nav className="top-nav pw-primary">
            <div className="icon"><Common.Icons.GitHub /></div>
            <div className="logo link">Play What</div>
            <div className="spacer" />
            <div className="link">Modules</div>
            <div className="icon meatball"><Common.Icons.Menu /></div>
        </nav>
    );
}

export default NavBar;
