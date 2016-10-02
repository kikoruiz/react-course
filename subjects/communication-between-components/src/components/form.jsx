import React from 'react';
import { languages } from '../config';

export default function Form ({
  defaultUser,
  defaultLanguage,
  defaultHighlightTitle,
  handleUserChange,
  handleLanguageChange,
  handleHighlightTitleChange,
  handleNoteSubmit
}) {
  function handleNoteKeyPress (event) {
    if (event.key === 'Enter') {
      handleNoteSubmit(event);
    }
  }

  return (
    <div>
      <div className='form-field'>
        <label htmlFor='user'>User: </label>
        <input id='user' type='text' onChange={handleUserChange} placeholder={defaultUser} />
      </div>

      <div className='form-field'>
        <label htmlFor='language'>Language: </label>
        <select
          id='language'
          onChange={handleLanguageChange}
          defaultValue={defaultLanguage}
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
        <label htmlFor='highlight-title'>Hightlight title: </label>
        <input
          id='highlight-title'
          type='checkbox'
          onChange={handleHighlightTitleChange}
          checked={defaultHighlightTitle}
        />
      </div>

      <div className='form-field'>
        <label htmlFor='note'>Add a note: </label>
        <input
          id='note'
          type='text'
          onKeyPress={handleNoteKeyPress}
        />
      </div>
    </div>
  );
}
