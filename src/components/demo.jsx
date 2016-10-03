import React, { Component, PropTypes } from 'react';
import Title from './title';
import Form from './form';
import Notes from './notes';

export default class Demo extends Component {
  constructor () {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleHighlightChange = this.handleHighlightChange.bind(this);
    this.handleNoteKeyPress = this.handleNoteKeyPress.bind(this);
    this.handleNoteDoubleClick = this.handleNoteDoubleClick.bind(this);
    this.handleNoteCheck = this.handleNoteCheck.bind(this);
    this.state = {
      name: 'Escuela IT',
      language: 'en',
      highlight: false,
      notes: []
    };
  }

  handleNameChange ({ target }) {
    this.setState({ name: target.value });
  }

  handleLanguageChange ({ target }) {
    this.setState({ language: target.value });
  }

  handleHighlightChange ({ target }) {
    this.setState({ highlight: target.checked });
  }

  handleNoteKeyPress ({ target, key }) {
    if (key === 'Enter' && target.value !== '') {
      const notes = this.state.notes.slice();
      notes.push({
        text: target.value
      });
      this.setState({ notes });
      target.value = '';
    }
  }

  handleNoteDoubleClick (index) {
    const self = this;

    return function ({ target }) {
      const isHighlighted = target.classList.contains('notes-item--highlighted');
      const notes = self.state.notes.slice();
      const note = Object.assign(notes[index], {
        highlighted: !isHighlighted
      });

      notes.splice(index, 1, note);
      self.setState({ notes });
    }
  }

  handleNoteCheck (index) {
    const self = this;

    return function ({ target }) {
      const notes = self.state.notes.slice();
      const note = Object.assign(notes[index], {
        done: target.checked
      });

      notes.splice(index, 1, note);
      self.setState({ notes });
    }
  }

  render () {
    const { name, language, highlight, notes } = this.state;

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
            handleNoteKeyPress={this.handleNoteKeyPress}
          />
        </div>
        <div className='sidebar'>
          <Notes
            notes={notes}
            handleNoteDoubleClick={this.handleNoteDoubleClick}
            handleNoteCheck={this.handleNoteCheck}
          />
        </div>
      </div>
    );
  }
}
