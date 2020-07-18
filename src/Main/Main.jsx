import React from 'react';
import './Main.css';
import '../Common/index.css';
import NavBar from '../NavBar/NavBar';
import Stage from '../Stage/Stage';
import { RecoilRoot } from 'recoil';
import PlaybackControls from '../PlaybackControls/PlaybackControls';

const Main = () => {
    return (
        <RecoilRoot>
            <NavBar />
            <Stage />
            <PlaybackControls />
        </RecoilRoot>
    );
};

export default Main;
