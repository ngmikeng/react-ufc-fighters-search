import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchInput;
