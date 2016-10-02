import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  static get propTypes () {
    return {
      handleNameChange: PropTypes.func.isRequired
    };
  }

  render () {
    return (
      <div className='form-field'>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' onChange={this.props.handleNameChange} />
      </div>
    );
  }
}
