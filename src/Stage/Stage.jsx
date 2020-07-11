import React, { useState } from 'react';
import './Stage.css';

import Menu from '../Menu/Menu';
import OutputList from './OutputList';

const Stage = () => {
    return (
        <div className="stage">
            <Menu />
            <OutputList />
        </div>
    );
}

export default Stage;
