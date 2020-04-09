import React, { useState } from 'react';
import './Main.css';
import Common from './Common/_module';
import Viewers from 'play-what-react-viewers';
import PW from 'play-what';
import * as Songs from './Songs';

const Fretboard = Viewers.v2.Fretboard;

const TEST = {
    strategy: 'NOTES_FROM_INTERVALS',
    args: {
        keyCenter: 'G4',
        intervals: {
            strategy: 'SCALE',
            args: {
                preset: 'Major'
            }
        }
    }
}

const Main = () => {

    return (
        <div className='controller-manager'>
            <div className="top-nav">
                <div className="link"><Common.Icons.GitHub /></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu /></div>
            </div>
            <div className="stage-controller">
                Name
            </div>
            <div className="stage">
                <pre>
                    {JSON.stringify(PW.v2.parse(TEST), null, '\t')}
                </pre>
                <div>
                    {Fretboard.Api.fromConfig()}
                </div>
            </div>
        </div>
    );
}

export default Main;
