import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Shelves from './Shelves';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
	this.getBooks();
  }

  getBooks = () => {
	BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <Shelves books={this.state.books}/>
    );
  }
}

export default Home;
