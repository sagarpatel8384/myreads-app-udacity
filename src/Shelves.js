import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelves extends Component {
  render() {
    const books = (status) => {
      return this.props.books.map((book) => {
        if (book.shelf === status) {
          return <Book key={book.id} bookData={book} updateBook={this.props.updateBook} shelf={book.shelf} />;
        } 
        return null;
      });
    };

    if (this.props.books.length > 0) {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
        	  {/* CURRENTLY READING */ }
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
        			      {books('currentlyReading')}
                  </ol>
                </div>
              </div>
        
        	  {/* WANT TO READ */ }
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
        			      {books('wantToRead')}
                  </ol>
                </div>
              </div>
        
              {/* READ */ }
              <div className="bookshelf">
                <h2 className="bookshelf-title">READ</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
        			      {books('read')}
                  </ol>
                </div>
              </div>
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
  books: PropTypes.array,
  updateBook: PropTypes.func.isRequired
};

export default Shelves;
