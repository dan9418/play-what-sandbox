import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import CAGED from './CAGED/CAGED';
import Page from './Page/Page';

export function App() {
    return (
        <div className='app-container'>
            {<Page />}
            {/*<CAGED />*/}
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);