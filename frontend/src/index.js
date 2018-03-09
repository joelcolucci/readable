import React from 'react';
import ReactDOM from 'react-dom';

import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import App from './containers/App';
import reducers from './reducers';
import './index.css';


const history = createHistory();
// Build middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

let middleware = [historyMiddleware, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
