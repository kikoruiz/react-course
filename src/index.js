import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';
import App from './components/app';
import Demo from './components/demo';
import About from './components/about';
import './index.scss';

render(
  <Router history={hashHistory}>
    <Redirect from='/' to='es' />
    <Route path='/:language' component={App}>
      <IndexRoute component={Demo} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('demo')
);
