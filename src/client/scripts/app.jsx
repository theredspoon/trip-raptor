import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Home from './components/home/home';
import Planner from './components/planner/planner';

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/planner" component={Planner} />
    </Router>
  </Provider>
), document.getElementById('container'));
