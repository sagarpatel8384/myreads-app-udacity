import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
    		   style={{ 
    		     width: 128, 
    			 height: 193, 
    			 backgroundImage: `url(${props.bookData.imageLinks.smallThumbnail})` 
    		   }}>
    	  </div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
          </div>
        <div className="book-title">{props.bookData.title}</div>
        <div className="book-authors">{props.bookData.authors}</div>
      </div>
    </li>
  )
};

Book.propTypes = {
  bookData: PropTypes.object.isRequired,
  shelf: PropTypes.string
};

export default Book;
