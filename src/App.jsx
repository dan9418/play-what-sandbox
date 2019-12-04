import * as ReactDOM from 'react-dom';
import * as React from "react";
import ViewDriver from "./ViewDriver/ViewDriver";
import './App.css';

import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';

export function App() {
    return (
        <Provider store={store}>
            <div className='app-container'>
                <ViewDriver />
            </div>
        </Provider>
    );
}


const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);