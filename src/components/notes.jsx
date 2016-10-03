import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Notes ({ notes }) {
  return (
    <div>
      <h2>Notes</h2>
      <ul className='notes'>
        {notes.map((note, index) => {
          const className = classNames('notes-item', {
            'notes-item--done': note.done,
            'notes-item--highlighted': note.highlighted
          });

          return (
            <li key={index} className={className}>
              {note.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
