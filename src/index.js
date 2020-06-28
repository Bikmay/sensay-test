import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import loginAction from './redux/actions/loginAction';
import setErrorMessage from './redux/actions/setErrorMessage';
import './index.css';

const rootReducer = combineReducers({
    loginAction : loginAction,
    errorMessages: setErrorMessage
})
const initialState={loginAction:{login:'',password:''},errorMessages:{loginErrorMessage:'561'}};
const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}>
    <App /></Provider>, document.getElementById("root"));