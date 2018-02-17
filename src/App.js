import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SearchInput from './components/SearchInput';
import FightersList from './components/FightersList';
import fightersData from './data/ufc-fighters.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: fightersData
    };
  }

  handleSearchInputChange = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      let searchResult = fightersData.filter(fighter => {
        let fighterName = fighter.first_name + ' ' + fighter.last_name;
        fighterName = fighterName.toLowerCase();
        if (fighterName.indexOf(event.target.value.toLowerCase()) > -1) {
          return true;
        }
        return false;
      });

      this.setState({
        searchResult: searchResult
      });
    } else {
      this.setState({
        searchResult: fightersData
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchInput onChange={this.handleSearchInputChange} />
        <FightersList listData={this.state.searchResult} />
      </div>
    );
  }
}

export default App;
