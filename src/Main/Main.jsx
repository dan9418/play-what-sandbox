import React from 'react';
import Viewers from 'play-what-react-viewers';

import Common from '../Common/_module';
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
                <Viewers.Modules.GraphCard />
                <Viewers.Modules.GuitarCard />
                <Viewers.Modules.PianoCard />
                <Viewers.Modules.TrueScaleCard />
                <Viewers.Modules.HarmonicSeriesCard />
            </div>
        </div>
    );
}

export default Main;
