import React, { PropTypes } from 'react';
import { translations } from '../data';
import { languages } from '../config';

export default function App ({ children, params }) {
  const { language } = params;

  if (languages.indexOf(language) === -1) {
    return <h1>404 error</h1>;
  }

  const header = translations[language].HEADER;

  return (
    <div>
      <h1>{header}</h1>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object
};
