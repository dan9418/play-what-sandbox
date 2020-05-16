import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';

import Common from '../Common/_module';
import './Splash.css';

const Splash = () => {
    const [modalOpen, setModalOpen] = useState(true);
    return (
        <div className='splash'>
            <h1>Play What?</h1>
            <p>Play What is a JavaScript library for musical concepts</p>
        </div>
    );
}

export default Splash;
