import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { translations } from '../data';
import { languages } from '../config';

export default function Title ({ name, highlight }, { language }) {
  const title = translations[language].TITLE.replace('%name%', name);
  const className = classNames('title', {
    'title--highlighted': highlight
  });

  return <h2 className={className}>{title}</h2>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired
};

Title.contextTypes = {
  language: PropTypes.oneOf(languages).isRequired
};
