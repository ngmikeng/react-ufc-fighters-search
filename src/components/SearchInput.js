import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  render() {
    return (
      <div className="SearchInput">
        <input type="text" className="SearchInput-text" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default SearchInput;
