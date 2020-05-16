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
            <div className="logo nav-link" onClick={() => routeContext.setRoute([HOME])}>Play What</div>
            <div className="spacer" />
            {routeContext.route.map((r, i) => r === HOME ? null : (
                <div
                    key={r}
                    className="nav-link breadcrumb"
                    onClick={() => routeContext.setRouteIndex(i)}
                >
                    {PAGES[r].name}
                </div>
            )
            )}
            <div className="left-nav">
                <a className="icon" href="https://github.com/dan9418/play-what-sandbox" target="_blank"><Common.Icons.GitHub /></a>
                <div className="icon meatball"><Common.Icons.Menu /></div>
            </div>

        </nav >
    );
}

export default NavBar;
