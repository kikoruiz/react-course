import React, { Component, PropTypes } from 'react';
import Title from './title';
import Form from './form';

export default class Demo extends Component {
  constructor () {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.state = {
      name: 'Escuela IT'
    };
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value });
  }

  render () {
    return (
      <div className='demo'>
        <div className='main'>
          <Title name={this.state.name} />
          <Form handleNameChange={this.handleNameChange} />
        </div>
        <div className='sidebar'></div>
      </div>
    );
  }
}
