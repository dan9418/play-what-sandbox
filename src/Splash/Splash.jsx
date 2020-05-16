import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';

import Common from '../Common/_module';
import './Splash.css';
import ButtonInput from 'play-what-react-viewers/src/UI/ButtonInput/ButtonInput';
import useRouteContext from '../Common/Router';

const Splash = () => {

    const routeContext = useRouteContext();

    return (
        <div className='splash'>
            <h1>Play What?</h1>
            <p>Play What is a JavaScript library for musical concepts</p>
            <ButtonInput onClick={() => routeContext.setRoute(['modules'])} >See Modules</ButtonInput>
        </div>
    );
}

export default Splash;
