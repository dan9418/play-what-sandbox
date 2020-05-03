import React from 'react';

import Common from '../Common/_module';

import TrueScaleCard from '../Modules/TrueScale/TrueScaleCard';
import GraphCard from '../Modules/Graph/GraphCard';
import HarmonicSeriesCard from '../Modules/HarmonicSeries/HarmonicSeriesCard';
import GuitarCard from '../Modules/Guitar/GuitarCard';

import './Main.css';
import PianoCard from '../Modules/Piano/PianoCard';

const Main = () => {
    return (
        <div className='main'>
            <nav className="top-nav">
                <div className="link"><Common.Icons.GitHub /></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu /></div>
            </nav>
            <div className="stage">
                <GraphCard />
                <GuitarCard />
                <PianoCard />
                <TrueScaleCard />
                <HarmonicSeriesCard />
            </div>
        </div>
    );
}

export default Main;
