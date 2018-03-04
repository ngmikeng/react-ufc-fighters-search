import React, { Component } from 'react';
import './SearchFilter.css';

class SearchFilter extends Component {
  render() {
    return (
      <div className="SearchFilter">
        <ul>
          <li>
            <button type="button" className={this.props.currentFilter === 'all' ? 'active' : ''}
              data-filter="all" onClick={this.props.onClick}>
              All
            </button>
          </li>
          <li>
            <button type="button" className={this.props.currentFilter === 'champ' ? 'active' : ''}
              data-filter="champ" onClick={this.props.onClick}>
              Champions
            </button>
          </li>
        </ul>
        <div style={{clear:'both'}}></div>
      </div>
    );
  }
}

export default SearchFilter;
