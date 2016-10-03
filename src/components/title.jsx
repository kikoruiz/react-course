import React, { PropTypes } from 'react';
import { translations } from '../data';

export default function Title ({ name, language }) {
  function title () {
    return translations[language]['TITLE'].replace('%name%', name);
  }

  return <h1 className='title'>{title()}</h1>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};
