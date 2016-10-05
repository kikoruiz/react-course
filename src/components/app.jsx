import React, { PropTypes } from 'react';
import { translations } from '../data';

export default function App ({ children, params }) {
  const { language } = params;
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
