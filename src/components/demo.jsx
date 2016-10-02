import React, { Component } from 'react';

class Title extends Component {
  render () {
    return <h1 className='title'>Hello World!</h1>;
  }
}

class Demo extends Component {
  render () {
    return (
      <div className='demo'>
        <Title />
      </div>
    );
  }
}

export default Demo;
