import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  );
}

export default App;
