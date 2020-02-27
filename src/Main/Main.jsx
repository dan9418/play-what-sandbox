import React from 'react';
import './Main.css';
import { Fretboard } from 'play-what-react-viewers';

const Main = () => {
    return (
        <div className='controller-manager'>
            <div className="top-nav">Play What</div>
            <div className="stage">
                <Fretboard.Controller />
            </div>
        </div>
    );
}

export default Main;
