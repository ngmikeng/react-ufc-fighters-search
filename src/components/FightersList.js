import React, { Component } from 'react';
import filtersData from '../data/ufc-fighters.json';

class FightersList extends Component {
  render() {
    return filtersData.map((fighter) => (
      <div>
        <img src={fighter.thumbnail}/>
        <div><b>{fighter.first_name} {fighter.last_name}</b></div>
        <div>{fighter.weight_class}</div>
      </div>
    ));
  }
}

export default FightersList;
