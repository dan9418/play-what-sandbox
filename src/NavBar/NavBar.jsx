import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import Common from '../Common/_module';
import './NavBar.css';
import useRouteContext from '../Common/Router';
import PAGES from '../Common/Pages';

const HOME = PAGES.splash.id;

const NavBar = () => {
    const routeContext = useRouteContext();
    return (
        <nav className="top-nav pw-primary">
            <div className="icon"><Common.Icons.GitHub /></div>
            <div className="logo link" onClick={() => routeContext.setRoute([HOME])}>Play What</div>
            <div className="spacer" />
            {routeContext.route.map(r => r === HOME ? null : <div key={r} className="link">{PAGES[r].name}</div>)}
            <div className="icon meatball"><Common.Icons.Menu /></div>
        </nav >
    );
}

export default NavBar;
