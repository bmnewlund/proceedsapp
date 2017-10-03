import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Splash from './components/splash';
import User from './components/user';
import Fundraiser from './components/fundraiser/new_fundraiser';
import Fundraisers from './components/fundraiser/fundraisers';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={Splash} />     
            <Route path="user" component={User} />
            <Route path="new_fundraiser" component={Fundraiser} />
            <Route path="fundraisers" component={Fundraisers} />
        </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));