import React from 'react';
import Notes from './notes';

export default function Sidebar (props) {
  return (
    <div>
      <Notes {...props} />
    </div>
  );
}
