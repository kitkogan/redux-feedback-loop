//imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = [], action) => {
    if(action.type === 'SET_FEEDBACK') {
        return action.payload
    }
    return state;
}

//Store holds all info for feedback app
const storeInstance = createStore(
    combineReducers({
       feedbackReducer,
    }),
    applyMiddleware(logger),
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker.unregister();