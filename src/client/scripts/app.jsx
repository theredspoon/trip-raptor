import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers/combine_reducers';
import PlaceInput from './components/place_input';
import Canvas from './components/canvas';
import POI from './components/poi';

const store = createStore(reducer);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={PlaceInput} />
      <Route path="/city" component={Canvas} />
    </Router>
  </Provider>
), document.getElementById('container'));
