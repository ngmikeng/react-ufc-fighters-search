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
    this.dataFiltered = fightersData.filter(fighter => {
      return true;
    });
    this.searchInputValue = '';
    this.state = {
      searchFilter: 'all',
      searchResult: fightersData.slice(0, 10)
    };
  }

  filterByWeightClass = (weightClass, data) => {
    if (weightClass) {
      this.dataFiltered = data.filter(fighter => {
        if (fighter.weight_class) {
          return fighter.weight_class.toLowerCase().indexOf(weightClass.toLowerCase()) > -1 ;
        }
        return false;
      });

      if (this.dataFiltered && this.dataFiltered.length > 0) {
        this.setState({
          searchFilter: weightClass,
          searchResult: this.dataFiltered.slice(0, 10)
        });
      }
    }
  }

  handleClickSearchFilter = (event) => {
    let dataFilter = event.target.getAttribute('data-filter');
    if (dataFilter === 'all') {
      // deep copy array
      this.dataFiltered = fightersData.filter(fighter => {
        return true;
      });

      this.setState({
        searchFilter: dataFilter,
        searchResult: this.dataFiltered.slice(0, 10)
      });
    } else if (dataFilter === 'champ') {
      this.dataFiltered = fightersData.filter(fighter => {
        return fighter.title_holder;
      });

      this.setState({
        searchFilter: dataFilter,
        searchResult: this.dataFiltered
      });
    } else {
      this.filterByWeightClass(dataFilter, fightersData);
    }

  }

  handleSearchInputChange = (event) => {
    if (event.target.value) {
      this.searchInputValue = event.target.value;
      let searchResult = this.dataFiltered.filter(fighter => {
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
      this.searchInputValue = '';
      this.setState({
        searchResult: this.dataFiltered.slice(0, 10)
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
