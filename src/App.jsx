import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import CAGED from './CAGED/CAGED';
import Page from './Page/Page';
import Arps from './Arps/Arps';

export function App() {
    return (
        <div className='app-container'>
            {<Page />}
            {/*<CAGED />*/}
            {/*<Arps />*/}
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);