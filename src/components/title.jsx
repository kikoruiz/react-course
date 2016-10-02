import React, { PropTypes } from 'react';

export default function Title ({ name }) {
  return <h1 className='title'>Hello {name}!</h1>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired
};
