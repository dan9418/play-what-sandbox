import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './Stage.css';
import Viewers from 'play-what-react-viewers';
import useRouteContext from '../Common/Router';

const Stage = ({ children }) => {
    const routeContext = useRouteContext();
    return (
        <div className="stage" id="stage">
            {routeContext.route.length > 1 &&
                <Viewers.UI.ButtonInput className="back" onClick={() => routeContext.pop()} >← Back</Viewers.UI.ButtonInput>
            }
            <div className="column">
                {children}
            </div>
        </div>
    );
}

export default Stage;
