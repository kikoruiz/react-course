import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Notes ({ notes }) {
  const hasNotes = notes.length > 0;

  return (
    <div>
      <h2>Notes</h2>
      {hasNotes &&
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
      }
      {!hasNotes && <strong>There is no notes.</strong>}
    </div>
  );
}
