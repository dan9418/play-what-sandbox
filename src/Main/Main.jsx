import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import Common from '../Common/_module';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import Stage from '../Stage/Stage';
import PW from 'play-what';
import { RecoilRoot } from 'recoil';

const Main = () => {
    return (
        <RecoilRoot>
            <NavBar />
            <Stage />
        </RecoilRoot>
    );
};

export default Main;
