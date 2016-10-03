import React, { Component, PropTypes } from 'react';
import { notes } from '../data';
import Title from './title';
import Form from './form';
import Notes from './notes';

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
    const { name, language, highlight } = this.state;

    return (
      <div className='demo'>
        <div className='main'>
          <Title
            name={name}
            language={language}
            highlight={highlight}
          />
          <Form
            defaultName={name}
            defaultLanguage={language}
            defaultHighlight={highlight}
            handleNameChange={this.handleNameChange}
            handleLanguageChange={this.handleLanguageChange}
            handleHighlightChange={this.handleHighlightChange}
          />
        </div>
        <div className='sidebar'>
          <Notes notes={notes} />
        </div>
      </div>
    );
  }
}
