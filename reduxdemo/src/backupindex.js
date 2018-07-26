//  import { applyMiddleware, createStore } from 'redux'
//import logger from "redux-logger";


// const reducer = function (state,action){
//     if(action.type ==='INC'){
//         return state+action.payload;
//     }
//     if(action.type ==='DEC'){
//         return state-action.payload;
//     }
//     if(action.type ==='E'){
//        throw new Error("opsss error");
//     }
//     return state;
// }

// //custom middleware
// const myLogger = (store) => (next ) => (action) => {
//     console.log("Custom Logger ", action);
//     next(action);
// }

// //error middleware
// const error = (store) => (next) => (action) => {
//     try{
//         next(action);
//     }
//     catch(e){
//         console.log("wwwwwwError");
//     }
// }

// const middleware = applyMiddleware(logger, myLogger);

// const store = createStore(reducer, 1, middleware);

// store.subscribe(()=>{
//     console.log("Store Changed :" + store.getState());
// })

// store.dispatch({type:"INC", payload:1});
// store.dispatch({type:"INC", payload:3});
// store.dispatch({type:"DEC", payload:20});
// store.dispatch({type:"E", payload:20});

//=========================================== Basic =====================
// import { combineReducers, applyMiddleware, createStore } from 'redux';
// import logger from "redux-logger";

// import { composeWithDevTools } from "redux-devtools-extension";

// const userReducer = (state = {}, action) => {
//     switch(action.type){
//         case "CHANGE_NAME":{
//             state = { ...state, name:action.payload}
//         }

//         case "CHANGE_AGE":{
//             state = { ...state, name:action.payload}
//         }
//     }
//     return state;
// }

// const tweetReducer = (state= [], action) => {
//     return state;
// }

// const reducers = combineReducers({
//     user:userReducer,
//     tweet:tweetReducer
// })

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

// store.subscribe(()=>{
//     console.log("Store changed :", store.getState());
// })
 
// store.dispatch({type:"CHANGE_NAME", payload:"New name"});
// store.dispatch({type:"CHANGE_NAME", payload:"bla bla"});
// store.dispatch({type:"CHANGE_AGE", payload:22});
// store.dispatch({type:"CHANGE_AGE", payload:11});

//===================================== intermidate----------

import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import thunk from 'redux-thunk';

import axios from 'axios';


const initialState = {
    fetching:false,
    fetched:false,
    users:[],
    error:null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_START":{
            return { ...state, fetching:true}
        }
        
        case "FETCH_USER_ERROR":{
            return { ...state, fetching:false, error:action.payload}
        }
           
        case "RECEIVE_USERS":{
            return { ...state, fetching:false, fetched:true, users:action.payload}
        }
         
    }
    return state;
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch)=>{
    dispatch({type:"FETCH_USER_START"})
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        dispatch({type:"RECEIVE_USERS", payload:response.data})
    })
    .catch((erroe) =>{
        dispatch({type:"FETCH_USERS_ERROR",payload:erroe})
    })
})

//-------------------------l5---------------------------------

// Level 5 - Redux-routing 
// npm install redux-routing --save
// import { applyMiddleware, createStore } from 'redux'
// import { createMiddleware, History, match,
//              navigate, reducer, route } 
//              from 'redux-routing'
 
// // define routes
// const routes = [
//   route('/', () => console.log('navigated to /')),
//   route('/foo', () => console.log('navigated to /foo')),
//   route('/foo/:bar', () => console.log('navigated to /foo/:bar'))
// ]
 
// // create routing middleware, set up with HTML5 History
// const middleware = createMiddleware(History)
 
// // create store with middleware
// const createStoreWithMiddleware =
//      applyMiddleware(middleware)(createStore)
     
// const store = createStoreWithMiddleware(reducer)
 
// // subscribe to changes
// store.subscribe(() => {
//   const route = store.getState()
//   const matched = match(route.href, routes)
 
//   if (matched) {
//     matched.handler()
//   } else {
//     console.log('404 not found')
//   }
// })
 
// // start navigating
// store.dispatch(navigate('/'))
// // logs 'navigated to /'
// store.dispatch(navigate('/foo'))
// // logs 'navigated to /foo'
// store.dispatch(navigate('/foo/123'))
// // logs 'navigated to /foo/:bar'
// store.dispatch(navigate('/foo/bar/baz'))

//===========================end l5===================