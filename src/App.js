import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchContainer from './components/SearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
