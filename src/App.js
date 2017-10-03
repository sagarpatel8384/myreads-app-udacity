import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Home from './Home';
import Search from './Search';
import './App.css';

class App extends Component {
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
     <Switch>
       <Route exact path='/' render={() => <Home books={this.state.books} />} />
       <Route exact path='/search' render={() => <Search books={this.state.books} />} />
     </Switch>
   );
  }
}

export default App;
