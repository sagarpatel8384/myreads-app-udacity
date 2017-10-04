import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelves from './Shelves';
import Search from './Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
	  BooksAPI.getAll().then((books) => {
	    this.setState({ books });
	  });
  };

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      this.getBooks();
    });
  };

  render() {
   return (
     <Switch>
       <Route exact path='/' render={() => <Shelves books={this.state.books} updateBook={this.updateBook} />} />
       <Route exact path='/search' render={() => <Search books={this.state.books} updateBook={this.updateBook} />} />
     </Switch>
   );
  }
}

export default App;
