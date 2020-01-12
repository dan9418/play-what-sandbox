import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import CAGED from './CAGED/CAGED';
import ControllerManager from './Main/ControllerManager';
import Arps from './Arps/Arps';

export function App() {
    return (
        <div className='app-container'>
            {<ControllerManager />}
            {/*<CAGED />*/}
            {/*<Arps />*/}
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);