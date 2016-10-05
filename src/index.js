import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';
import App from './components/app';
import Demo from './components/demo';
import './index.scss';

render(
  <Router history={hashHistory}>
    <Redirect from='/' to='es' />
    <Route path='/:language' component={App}>
      <IndexRoute component={Demo} />
    </Route>
  </Router>,
  document.getElementById('demo')
);
