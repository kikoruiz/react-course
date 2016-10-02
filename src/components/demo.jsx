import React, { Component, PropTypes } from 'react';

class Title extends Component {
  static get propTypes () {
    return {
      name: PropTypes.string.isRequired
    };
  }

  render () {
    return <h1 className='title'>Hello {this.props.name}!</h1>;
  }
}

class Demo extends Component {
  render () {
    return (
      <div className='demo'>
        <Title name='Escuela IT' />
      </div>
    );
  }
}

export default Demo;
