import React, { Component, PropTypes } from 'react';

export default class Title extends Component {
  static get propTypes () {
    return {
      name: PropTypes.string.isRequired
    };
  }

  render () {
    return <h1 className='title'>Hello {this.props.name}!</h1>;
  }
}
