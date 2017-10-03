import React, { Component } from 'react';
import Shelves from './Shelves';

class Home extends Component {
  render() {
    return (
      <Shelves books={this.props.books}/>
    );
  }
}

export default Home;
