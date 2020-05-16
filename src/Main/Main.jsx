import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import Common from '../Common/_module';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import useRouteContext, { RouteContextProvider } from '../Common/Router';
import Stage from '../Stage/Stage';
import Splash from '../Splash/Splash';
import ModuleList from '../ModuleList/ModuleList';

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

const Page = () => {
    const routeContext = useRouteContext();

    const pageId = routeContext.route[routeContext.route.length - 1];
    const PageComponent = PAGES[pageId].component;
    return <PageComponent />;
}

const Main = () => {
    return (
        <RouteContextProvider>
            <NavBar />
            <Stage>
                <Page />
            </Stage>
        </RouteContextProvider>
    );
};

export default Main;
