import React from 'react';
import './Main.css';
import Common from './Common/_module';
import { Fretboard } from 'play-what-react-viewers';

const Main = () => {
    return (
        <div className='controller-manager'>
            <div className="top-nav">
                <div className="link"><Common.Icons.GitHub/></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu/></div>
            </div>
            <div className="stage">
                <Fretboard.Controller />
            </div>
        </div>
    );
}

export default Main;
