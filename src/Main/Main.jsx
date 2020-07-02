import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import Common from '../Common/_module';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import useRouteContext, { RouteContextProvider } from '../Common/Router';
import Stage from '../Stage/Stage';
import PW from 'play-what';

const NoteContextProvider = Viewers.Utils.NoteContextProvider;

const Main = () => {
    return (
        <RouteContextProvider>
            <NoteContextProvider>
                <NavBar />
                <Stage/>
            </NoteContextProvider>
        </RouteContextProvider>
    );
};

export default Main;
