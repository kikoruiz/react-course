import React, { Component, PropTypes } from 'react';
import Title from './title';
import Form from './form';

export default class Demo extends Component {
  constructor () {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleHighlightChange = this.handleHighlightChange.bind(this);
    this.state = {
      name: 'Escuela IT',
      language: 'en',
      highlight: false
    };
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value });
  }

  handleLanguageChange (event) {
    this.setState({ language: event.target.value });
  }

  handleHighlightChange (event) {
    this.setState({ highlight: event.target.checked });
  }

  render () {
    return (
      <div className='demo'>
        <div className='main'>
          <Title
            name={this.state.name}
            language={this.state.language}
            highlight={this.state.highlight}
          />
          <Form
            defaultName={this.state.name}
            defaultLanguage={this.state.language}
            defaultHighlight={this.state.highlight}
            handleNameChange={this.handleNameChange}
            handleLanguageChange={this.handleLanguageChange}
            handleHighlightChange={this.handleHighlightChange}
          />
        </div>
        <div className='sidebar'></div>
      </div>
    );
  }
}
