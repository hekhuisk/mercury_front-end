import React from 'react';

import Mercury from "./Mercury";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createRootReducer, rootSaga } from './redux';
import {Provider} from "react-redux";
import { ConnectedRouter } from 'connected-react-router'

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();

const initialState = {}
const enhancers = []
const middleware = [
    routerMiddleware(history),
    sagaMiddleware
]

if (process.env.NODE_ENV === 'development' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Mercury />
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
export {
    history
}
