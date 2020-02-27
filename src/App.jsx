import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import Main from './Main/Main';

const App = () => <Main />;

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);