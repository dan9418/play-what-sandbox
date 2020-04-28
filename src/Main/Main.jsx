import React, { useState } from 'react';
import './Main.css';
import Common from '../Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';
import * as Songs from './Songs';

import TrueScale from './TrueScale/TrueScale';
import Vectors from './Vectors/Vectors';
import HarmonicSeries from './HarmonicSeries/HarmonicSeries';
import Guitar from './Guitar/Guitar';

const Main = () => {
    return (
        <div className='main'>
            <nav className="top-nav">
                <div className="link"><Common.Icons.GitHub /></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu /></div>
            </nav>
            <div className="stage">
                <div>
                    <Vectors />
                </div>
                <br />
                <div>
                    <TrueScale />
                </div>
                <div>
                    <HarmonicSeries />
                </div>
                <div>
                    <Guitar />
                </div>
            </div>
        </div>
    );
}

export default Main;
