import React, { useState } from 'react';
import './Stage.css';

import Menu from '../Menu/Menu';
import ViewerManager from './ViewerManager';
import ApiTest from '../Main/ApiTest';

const Stage = () => {
    return (
        <div className="stage">
            {/*<ApiTest></ApiTest>*/}
            <ViewerManager />
            {/*<Menu />*/}
        </div>
    );
}

export default Stage;
