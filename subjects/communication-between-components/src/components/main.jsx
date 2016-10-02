import React, { Component } from 'react';
import Title from './title';
import Form from './form';

export default class Main extends Component {
  constructor () {
    super();

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleHighlightTitleChange = this.handleHighlightTitleChange.bind(this);

    this.state = {
      user: 'Escuela IT',
      language: 'es',
      highlightTitle: false
    };
  }

  handleUserChange (event) {
    const user = event.target.value;

    this.setState({ user });
  }

  handleLanguageChange (event) {
    const language = event.target.value;

    this.setState({ language });
  }

  handleHighlightTitleChange (event) {
    const highlightTitle = event.target.checked;

    this.setState({ highlightTitle });
  }

  render () {
    const { user, language, highlightTitle, notes } = this.state;
    const { handleNoteSubmit } = this.props;

    return (
      <div>
        <Title
          user={user}
          language={language}
          highlightTitle={highlightTitle}
        />
        <Form
          defaultUser={user}
          defaultLanguage={language}
          defaultHighlightTitle={highlightTitle}
          handleUserChange={this.handleUserChange}
          handleLanguageChange={this.handleLanguageChange}
          handleHighlightTitleChange={this.handleHighlightTitleChange}
          handleNoteSubmit={handleNoteSubmit}
        />
      </div>
    );
  }
}
