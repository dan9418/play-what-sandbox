import React, { useState } from 'react';
import './Main.css';
import Common from './Common/_module';
import { Fretboard } from 'play-what-react-viewers';
import NumericInput from 'play-what-react-viewers/src/Inputs/NumericInput/NumericInput';

const Main = () => {

    const [x, setX] = useState(2);
    const [y, setY] = useState(3);

    return (
        <div className='controller-manager'>
            <div className="top-nav">
                <div className="link"><Common.Icons.GitHub /></div>
                <div className="app-title">Play What</div>
                <div className="menu"><Common.Icons.Menu /></div>
            </div>
            <div className="stage-controller">
                <div className="grid-input-container">
                    <div className="text">Grid:</div>
                    <NumericInput value={x} setValue={setX} />
                    <div className="text">x</div>
                    <NumericInput value={y} setValue={setY} />
                </div>
            </div>
            <div className="stage">
                <div className="grid" style={{ gridTemplateColumns: `repeat(${x}, 1fr)`, gridTemplateRows: `repeat(${y}, 1fr)` }}>
                    {[...Array(x * y)].map((e, i) => <Fretboard.Controller key={i} />)}
                </div>
            </div>
        </div>
    );
}

export default Main;
