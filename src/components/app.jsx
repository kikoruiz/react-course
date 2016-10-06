import React, { PropTypes } from 'react';
import { translations } from '../data';
import { languages } from '../config';
import NavLink from './nav-link';

export default function App (props) {
  const { children, params } = props;
  const { language } = params;

  if (languages.indexOf(language) === -1) {
    return <h1>404 error</h1>;
  }

  const header = translations[language].HEADER;

  return (
    <div>
      <h1>{header}</h1>
      <nav>
        <NavLink {...props} path='' text='Demo' />
        <NavLink {...props} path='about' text='About' />
      </nav>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object
};
