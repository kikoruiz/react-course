import React, { Component, PropTypes } from 'react';
import { translations } from '../data';
import { languages } from '../config';
import NavLink from './nav-link';

export default class App extends Component {
  getChildContext () {
    return {
      language: this.props.params.language,
      path: this.props.routes[this.props.routes.length - 1].path || ''
    };
  }

  render () {
    const { children, params } = this.props;

    if (languages.indexOf(params.language) === -1) {
      return <h1>404 error</h1>;
    }

    const header = translations[params.language].HEADER;

    return (
      <div>
        <h1>{header}</h1>
        <nav>
          <NavLink path='' text='Demo' />
          <NavLink path='about' text='About' />
        </nav>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
  routes: PropTypes.array
};

App.childContextTypes = {
  language: PropTypes.string,
  path: PropTypes.string
};
