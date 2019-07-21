import {createStore, applyMiddleware} from "redux";

import logger from "redux-logger";

import reducer, {defaultState} from "./reducers/";
import {Store} from "./interfaces";


const initialState: Store = {...defaultState};

export default function configureStore() {
    const store = createStore(reducer, initialState, applyMiddleware(logger));
    return store;
}
