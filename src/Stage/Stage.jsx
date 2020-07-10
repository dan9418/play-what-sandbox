import React, { useState } from 'react';
import './Stage.css';

import Menu from './Menu';
import OutputList from './OutputList';

const Stage = () => {
    return (
        <div className="stage pw-medium">
            <div className="center pw-light">
                <Menu />
                <OutputList />
            </div>
        </div>
    );
}

export default Stage;
