import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['currentlyReading', 'wantToRead', 'read', 'none']
    };
  }

  render() {
    const options = this.state.options.map((option, index) => {
      const optionText = option.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => { return str.toUpperCase(); });
      if (option === this.props.shelf) {
        return <option value={option} key={index} selected>{optionText}</option>;
      }
      return <option value={option} key={index}>{optionText}</option>;
    });

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{backgroundImage: `url(${this.props.bookData.imageLinks.smallThumbnail})`}}
            >
          </div>
            <div className="book-shelf-changer">
              <select onChange={(e) => this.props.updateBook(this.props.bookData, e.target.value)}>
                <option value="none" disabled selected>Move to...</option>
                {options}
              </select>
            </div>
            </div>
          <div className="book-title">{this.props.bookData.title}</div>
          <div className="book-authors">{this.props.bookData.authors}</div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  bookData: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Book;
