import React from 'react';

import Common from '../Common/_module';

import TrueScaleCard from './TrueScale/TrueScaleCard';
import VectorsCard from './Vectors/VectorsCard';
import HarmonicSeriesCard from './HarmonicSeries/HarmonicSeriesCard';
import GuitarCard from './Guitar/GuitarCard';

import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <nav className="top-nav">
                <div className="link"><Common.Icons.GitHub /></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu /></div>
            </nav>
            <div className="stage">
                <VectorsCard />
                <TrueScaleCard />
                <HarmonicSeriesCard />
                <GuitarCard />
            </div>
        </div>
    );
}

export default Main;
