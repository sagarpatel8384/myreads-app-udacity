import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      trackedBooks: {}
    };
  }

  componentWillMount() {
    this.trackBooks(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.trackBooks(nextProps);
  }

  trackBooks = (bookProps) => {
    const trackedBooks = {};

    bookProps.books.forEach((book) => {
      trackedBooks[book.id] = book.shelf;
    });

    this.setState({ trackedBooks });
  };

  search = (e) => {
    BooksAPI.search(e.target.value).then((searchResults) => {
      this.setState({ searchResults });
    });
  };
  
  render() {
    let books;

    if (!this.state.searchResults.error) {
      books = this.state.searchResults.map((book) => {
        if (Object.keys(this.state.trackedBooks).includes(book.id)) {
          return (
            <Book
              key={book.id}
              bookData={book}
              shelf={this.state.trackedBooks[book.id]}
              updateBook={this.props.updateBook}
            />
          );
        }
        return <Book key={book.id} bookData={book} updateBook={this.props.updateBook}/>;
      });
    } else {
      books = <h1>No Results Found</h1>;
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
      	  <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={(e) => this.search(e)} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
			      {books}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Search;
