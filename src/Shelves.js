import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelves extends Component {
  render() {
    const books = this.props.books.map((book) => {
      return <Book key={book.id} bookData={book} />;
    });
    
    if (this.props.books.length > 0) {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            </div>
          </div>
          <div className="open-search">
        	<Link to='/search'>Add a book</Link>
    	  </div>
     	</div>
      )
    } else {
      return <h1>Loading Books...</h1>;
    }
  };
}

Shelves.propTypes = {
  books: PropTypes.array.isRequired
};

export default Shelves;
