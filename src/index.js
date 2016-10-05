import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from './components/app';
import Demo from './components/demo';
import './index.scss';

const DEFAULT_LANGUAGE = 'es';

render(
  <Router history={browserHistory}>
    <Redirect from='/react-course' to={DEFAULT_LANGUAGE} />
    <Redirect from='/' to={DEFAULT_LANGUAGE} />
    <Route path=':language' component={App}>
      <IndexRoute component={Demo} />
    </Route>
  </Router>,
  document.getElementById('demo')
);
