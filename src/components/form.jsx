import React, { PropTypes } from 'react';

export default function Form ({ handleNameChange }) {
  return (
    <div className='form-field'>
      <label htmlFor='name'>Name: </label>
      <input type='text' id='name' onChange={handleNameChange} />
    </div>
  );
}

Form.propTypes = {
  handleNameChange: PropTypes.func.isRequired
};
