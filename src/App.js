import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SearchInput from './components/SearchInput';
import SearchFilter from './components/SearchFilter';
import FightersList from './components/FightersList';
import fightersData from './data/ufc-fighters.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataFilter = fightersData.filter(fighter => {
      return true;
    });
    this.state = {
      searchFilter: 'all',
      searchResult: fightersData.slice(0, 10)
    };
  }
title_holder
  handleClickSearchFilter = (event) => {
    console.log(event.target);
    let dataFilter = event.target.getAttribute('data-filter');
    if (dataFilter === 'all') {
      // deep copy array
      this.dataFilter = fightersData.filter(fighter => {
        return true;
      });

      this.setState({
        searchFilter: dataFilter,
        searchResult: this.dataFilter.slice(0, 10)
      });
    } else if (dataFilter === 'champ') {
      this.dataFilter = fightersData.filter(fighter => {
        return fighter.title_holder;
      });

      this.setState({
        searchFilter: dataFilter,
        searchResult: this.dataFilter
      });
    }

  }

  handleSearchInputChange = (event) => {
    if (event.target.value) {
      let searchResult = this.dataFilter.filter(fighter => {
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
        searchResult: this.dataFilter.slice(0, 10)
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
        <SearchFilter onClick={this.handleClickSearchFilter} currentFilter={this.state.searchFilter} />
        <SearchInput onChange={this.handleSearchInputChange} />
        { searchResult }
      </div>
    );
  }
}

export default App;
