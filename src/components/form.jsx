import React, { PropTypes } from 'react';
import { languages } from '../config';

export default function Form ({
  defaultName,
  defaultLanguage,
  defaultHighlight,
  handleNameChange,
  handleLanguageChange,
  handleHighlightChange
}) {
  return (
    <div>
      <div className='form-field'>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          value={defaultName}
          onChange={handleNameChange}
        />
      </div>

      <div className='form-field'>
        <label htmlFor='language'>Language: </label>
        <select
          id='language'
          defaultValue={defaultLanguage}
          onChange={handleLanguageChange}
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
          checked={defaultHighlight}
          onChange={handleHighlightChange}
        />
      </div>
    </div>
  );
}

Form.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleHighlightChange: PropTypes.func.isRequired
};
