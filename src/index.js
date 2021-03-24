import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {loadState, saveState} from "./redux/localStorage";


const persistedState = loadState();

const store = createStore(rootReducer, persistedState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
))

store.subscribe(() => {
    saveState({
        notes: store.getState().notes
    });
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
