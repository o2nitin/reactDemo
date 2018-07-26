//React with Redux
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';

import allReducers from './reducers/index';
import App from './App'

import logger from 'redux-logger';
import { composeWithDevTools } from 
           "redux-devtools-extension"; 

const middleware=applyMiddleware(logger)

const store=createStore(allReducers,composeWithDevTools(
    applyMiddleware(logger)));

//connect store with provider  with app
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,    
    document.getElementById('root')
)