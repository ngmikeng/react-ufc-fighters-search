import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchFilter.css';

class SearchFilter extends Component {
  render() {
    const listFilters = [
      { type: 'all', label: 'All' },
      { type: 'champ', label: 'Champions' },
      { type: 'flyweight', label: 'Flyweight' },
      { type: 'bantamweight', label: 'Bantamweight' },
      { type: 'featherweight', label: 'Featherweight' },
      { type: 'lightweight', label: 'Lightweight' },
      { type: 'welterweight', label: 'Welterweight' },
      { type: 'middleweight', label: 'Middleweight' },
      { type: 'light_heavyWeight', label: 'Light Heavyweight' },
      { type: 'heavyweight', label: 'Heavyweight' }
    ];

    return (
      <div className="SearchFilter">
        <ul>
          {
            listFilters.map((item, index) => {
              return (
                <li key={ index }>
                  <button type="button" className={this.props.currentFilter === item.type ? 'active' : ''}
                    data-filter={ item.type } onClick={this.props.onClick}>
                    { item.label }
                  </button>
                </li>
              );
            })
          }
        </ul>
        <div style={{clear:'both'}}></div>
      </div>
    );
  }
}

SearchFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchFilter;
