import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/home/home';
import Planner from './components/planner/planner';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/planner" component={Planner} />
  </Router>
), document.getElementById('container'));
