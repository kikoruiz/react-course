import React, { Component } from 'react';

export default class Form extends Component {
  render () {
    return (
      <div className='form-field'>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' onChange={
          event => console.log(event.target.value)
        } />
      </div>
    );
  }
}
