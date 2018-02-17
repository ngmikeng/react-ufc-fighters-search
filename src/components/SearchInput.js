import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className="SearchContainer">
        <div>
          <input type="text" onChange={this.props.onChange} />
        </div>
      </div>
    );
  }
}

export default SearchInput;
