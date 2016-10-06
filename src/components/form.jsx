import React, { PropTypes } from 'react';
import { languages } from '../config';

export default function Form ({
  name,
  highlight,
  handleNameChange,
  handleHighlightChange,
  handleNoteKeyPress
}, { language, path }) {
  function changeLanguage ({ target }) {
    window.location.hash = `${target.value}/${path}`;
  }

  return (
    <div>
      <div className='form-field'>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className='form-field'>
        <label htmlFor='language'>Language: </label>
        <select
          id='language'
          value={language}
          onChange={changeLanguage}
        >
          {languages.map((language, index) => {
            return (
              <option key={index} value={language}>
                {language}
              </option>
            );
          })}
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor='highlight'>Highlight: </label>
        <input
          type='checkbox'
          id='highlight'
          checked={highlight}
          onChange={handleHighlightChange}
        />
      </div>

      <div className='form-field'>
        <label htmlFor='note'>Add a note: </label>
        <input
          type='text'
          id='note'
          onKeyPress={handleNoteKeyPress}
        />
      </div>
    </div>
  );
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleHighlightChange: PropTypes.func.isRequired,
  handleNoteKeyPress: PropTypes.func.isRequired
};

Form.contextTypes = {
  language: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
