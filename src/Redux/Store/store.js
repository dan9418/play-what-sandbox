import { createStore, combineReducers } from 'redux';
import { reducers } from '../Reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(
    reducers,
    {},
    devToolsEnhancer({ realtime: true })
);