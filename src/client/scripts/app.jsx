import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers/combine_reducers';

import Home from './components/home/home';
import Planner from './components/planner/planner';

const store = createStore(reducer);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/planner" component={Planner} />
    </Router>
  </Provider>
), document.getElementById('container'));
