import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import configureStore from "./models";
import {defaultUI} from "./models/reducers";
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const reduxStore = configureStore();

ReactDOM.render(
    <Provider store={reduxStore}><App {...defaultUI} /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
