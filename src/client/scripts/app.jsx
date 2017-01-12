import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import reducer from './reducers/combine_reducers';
import PlaceInput from './components/place_input';
import Canvas from './components/canvas';
import POI from './components/poi';

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
    ),
);

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={PlaceInput} />
      <Route path="/*" >
        <IndexRoute component={Canvas} />
        <Route path="/*/*" component={Canvas} />
        <Route path="/*/*/*" component={Canvas} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'));
