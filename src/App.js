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
      searchResult: fightersData.slice(0, 10)
    };
  }

  handleSearchInputChange = (event) => {
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
        searchResult: searchResult.slice(0, 10)
      });
    } else {
      this.setState({
        searchResult: fightersData.slice(0, 10)
      });
    }
  }

  render() {
    let searchResult;
    if (this.state.searchResult && this.state.searchResult.length > 0) {
      searchResult = <FightersList listData={this.state.searchResult} />;
    } else {
      searchResult = <p className="App-no-result">No Result</p>;
    }
    return (
      <div className="App">
        <Header />
        <SearchInput onChange={this.handleSearchInputChange} />
        { searchResult }
      </div>
    );
  }
}

export default App;
