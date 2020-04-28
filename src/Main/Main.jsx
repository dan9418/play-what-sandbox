import React, { useState } from 'react';
import './Main.css';
import Common from '../Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';
import * as Songs from './Songs';

import Card from './Card//Card';

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
                <Card title='Vectors (p, d)'>
                    <Vectors />
                </Card>
                <Card title='True Scale (100Hz, n = 32)'>
                    <TrueScale />
                </Card>
                <Card title='Harmonic Series (100Hz, n = 32)'>
                    <HarmonicSeries />
                </Card>
                <Card title='Guitar (Db Major Scale)'>
                    <Guitar />
                </Card>
            </div>
        </div>
    );
}

export default Main;
