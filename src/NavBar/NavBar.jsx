import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import Common from '../Common/_module';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="top-nav pw-primary">
            <div className="logo nav-link">Play What</div>
            <div className="spacer" />
            <div className="left-nav">
                <a className="icon" href="https://github.com/dan9418/play-what-sandbox" target="_blank"><Common.Icons.GitHub /></a>
                <div className="icon meatball"><Common.Icons.Menu /></div>
            </div>
        </nav >
    );
}

export default NavBar;
