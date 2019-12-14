import * as ReactDOM from 'react-dom';
import * as React from "react";
import './App.css';

import { FretboardDriver } from './Viewers/FretboardDriver/FretboardDriver';
import { KeyboardDriver } from './Viewers/KeyboardDriver/KeyboardDriver';

export function App() {
    return (
        <div className='app-container'>
            <FretboardDriver />
            <KeyboardDriver />
        </div>
    );
}


const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);