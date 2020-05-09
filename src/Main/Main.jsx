import React from 'react';
import Viewers from 'play-what-react-viewers';

import Common from '../Common/_module';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <nav className="top-nav">
                <div className="icon"><Common.Icons.GitHub /></div>
                <div className="logo link">Play What</div>
                <div className="link">Modules</div>
                <div className="spacer" />
                <div className="link">Docs</div>
                <div className="icon meatball"><Common.Icons.Menu /></div>
            </nav>
            <div className="stage">
                <div className="column">
                    <Viewers.Modules.GraphCard />
                    <Viewers.Modules.FretboardCard />
                    <Viewers.Modules.KeyboardCard />
                    <Viewers.Modules.TrueScaleCard />
                    <Viewers.Modules.HarmonicSeriesCard />
                </div>
            </div>
        </div>
    );
}

export default Main;
