import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import Common from '../Common/_module';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import useRouteContext, { RouteContextProvider } from '../Common/Router';
import Stage from '../Stage/Stage';
import PAGES from '../Common/Pages';
import PW from 'play-what';

const NoteContextProvider = Viewers.Utils.NoteContextProvider;

const Page = () => {
    const routeContext = useRouteContext();

    const pageId = routeContext.route[routeContext.route.length - 1];
    const PageComponent = PAGES[pageId].component;
    return <PageComponent back={routeContext.pop} />;
};

const Main = () => {
    return (
        <RouteContextProvider>
            <NoteContextProvider>
                <Stage>
                    <NavBar />
                    <Page />
                </Stage>
            </NoteContextProvider>
        </RouteContextProvider>
    );
};

export default Main;
