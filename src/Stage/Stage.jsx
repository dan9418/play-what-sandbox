import React, { useState } from 'react';
import './Stage.css';

import Menu from '../Menu/Menu';
import OutputList from './OutputList';

const Stage = () => {
    return (
        <div className="stage">
            <OutputList />
            <Menu />
        </div>
    );
}

export default Stage;
