import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { translations } from '../data';
import { languages } from '../config';

export default function Title ({ name, language, highlight }) {
  const title = translations[language].TITLE.replace('%name%', name);
  const className = classNames('title', {
    'title--highlighted': highlight
  });

  return <h1 className={className}>{title}</h1>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.oneOf(languages).isRequired,
  highlight: PropTypes.bool.isRequired
};
