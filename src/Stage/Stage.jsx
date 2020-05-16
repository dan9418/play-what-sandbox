import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import ModuleList from '../ModuleList/ModuleList';
import Splash from '../Splash/Splash';
import Common from '../Common/_module';
import useRouteContext from '../Common/Router';
import './Stage.css';

const PAGES = {
    splash: {
        id: 'splash',
        name: 'Splash',
        component: Splash
    },
    modules: {
        id: 'modules',
        name: 'Modules',
        component: ModuleList
    }
};

const Stage = () => {
    const routeContext = useRouteContext();

    const pageId = routeContext.route[routeContext.route.length - 1];
    const PageComponent = PAGES[pageId].component;

    return (
        <div className="stage" id="stage">
            <div className="column">
                <PageComponent />
            </div>
        </div>
    );
}

export default Stage;
