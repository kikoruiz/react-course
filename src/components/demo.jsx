import React, { Component, PropTypes } from 'react';
import Title from './title';
import Form from './form';

export default class Demo extends Component {
  constructor () {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.state = {
      name: 'Escuela IT',
      language: 'es'
    };
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value });
  }

  handleLanguageChange (event) {
    this.setState({ language: event.target.value });
  }

  render () {
    return (
      <div className='demo'>
        <div className='main'>
          <Title name={this.state.name} language={this.state.language} />
          <Form
            handleNameChange={this.handleNameChange}
            handleLanguageChange={this.handleLanguageChange}
          />
        </div>
        <div className='sidebar'></div>
      </div>
    );
  }
}
