import {combineReducers, createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import formReducer from "./reducer";
let reducer = combineReducers({
    formReducer:formReducer
});
const store = createStore(reducer, applyMiddleware(thunk))
export default store;
