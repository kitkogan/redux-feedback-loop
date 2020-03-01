//imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//Redux
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';


const defaultFeedbackState = {
    Feelings: 0,
    Understanding: 0,
    Support: 0,
    Comments: ''
}

//data from different pages sent to redux store
//all data will clear on submit button click
const feedbackReducer = (state = defaultFeedbackState, action) => {
    if (action.type === 'FEELING_UPDATE'){
        return {...state, Feelings: action.payload};
    } else if (action.type === 'UNDERSTAND_UPDATE'){
        return {...state, Understanding: action.payload};
    } else if (action.type === 'SUPPORT_UPDATE'){
        return { ...state, Support: action.payload}
    } else if (action.type === 'COMMENTS_UPDATE'){
        return {...state, Comments: action.payload}
    } else if (action.type === 'CLEAR_FEEDBACK'){
        return defaultFeedbackState;
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