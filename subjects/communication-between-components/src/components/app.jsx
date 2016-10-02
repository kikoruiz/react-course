import React, { Component } from 'react';
import Main from './main';
import Sidebar from './sidebar';

export default class App extends Component {
  constructor () {
    super();

    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
    this.handleNoteDoubleClick = this.handleNoteDoubleClick.bind(this);

    this.state = {
      notes: []
    };
  }

  handleNoteSubmit (event) {
      const target = event.target || event.target.note;
      const noteText = target.value;
      const notes = this.state.notes.concat({
        text: noteText
      });

      this.setState({ notes });
      target.value = '';
      event.preventDefault();
  }

  handleNoteDoubleClick (key) {
    const self = this;
    return function (event) {
      const note = event.target;
      const noteText = note.innerText;
      const isNoteDone = note.classList.contains('notes-item--done');
      // Create a new copy of notes state.
      const notes = self.state.notes.slice();
      notes.splice(key, 1, {
        text: noteText,
        done: !isNoteDone
      });

      self.setState({ notes });
    }
  }

  render () {
    return (
      <div className='app'>
        <Main handleNoteSubmit={this.handleNoteSubmit} />
        <Sidebar
          notes={this.state.notes}
          handleNoteDoubleClick={this.handleNoteDoubleClick}
        />
      </div>
    );
  }
}
