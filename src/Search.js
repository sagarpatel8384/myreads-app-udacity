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
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const trackedBooks = {};
    
    nextProps.books.forEach((book) => {
      trackedBooks[book.id] = book.shelf;
    });
    
    this.setState({ trackedBooks });
  }
  
  search = (e) => {
    BooksAPI.search(e.target.value).then((searchResults) => {
      this.setState({ searchResults });
    });
  }
  
  render() {
    const books = this.state.searchResults.length && this.state.searchResults.map((book) => {
	  if (Object.keys(this.state.trackedBooks).includes(book.id)) {
        return <Book key={book.id} bookData={book} shelf={this.state.trackedBooks[book.id]}/>;
      }
      return <Book key={book.id} bookData={book} />;
    });
    
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
  books: PropTypes.array.isRequired
};

export default Search;
