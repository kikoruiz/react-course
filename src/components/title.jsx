import React, { PropTypes } from 'react';
import { translations } from '../data';
import { languages } from '../config';

export default function Title ({ name, language }) {
  const title = translations[language]['TITLE'].replace('%name%', name);

  return <h1 className='title'>{title}</h1>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.oneOf(languages).isRequired
};
