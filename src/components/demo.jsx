import React, { Component, PropTypes } from 'react';
import Title from './title';
import Form from './form';

export default class Demo extends Component {
  render () {
    return (
      <div className='demo'>
        <Title name='Escuela IT' />
        <Form />
      </div>
    );
  }
}
