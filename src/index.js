import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  hashHistory,
  applyRouterMiddleware
} from 'react-router';
import { useTransitions, withTransition } from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import App from './components/app';
import Demo from './components/demo';
import About from './components/about';
import './index.scss';

render(
  <Router history={hashHistory} render={applyRouterMiddleware(
    useTransitions({
      TransitionGroup: ReactCSSTransitionGroup,
      defaultTransition: {
        transitionName: 'animate',
        transitionEnterTimeout: 300,
        transitionLeaveTimeout: 300
      }
    })
  )}>
    <Redirect from='/' to='es' />
    <Route path='/:language' component={withTransition(App)}>
      <IndexRoute component={Demo} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('demo')
);
