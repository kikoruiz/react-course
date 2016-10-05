import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Demo from './components/demo';
import './index.scss';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Demo} />
    </Route>
  </Router>,
  document.getElementById('demo')
);
