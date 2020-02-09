import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import Main from './Main/Main';

export function App() {
    return (
        <div className='app-container'>
            {<Main />}
        </div>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);