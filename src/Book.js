import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  return (
    <h1>book!</h1>
  )
};

Book.propTypes = {
  bookData: PropTypes.object.isRequired
};

export default Book;
