import React, { Component } from 'react';
import './FightersList.css'

class FightersList extends Component {
  render() {
    return this.props.listData.map(fighter => (
      <div key={fighter.id} className="FightersList-item">
        <img src={fighter.thumbnail} alt="thumbnail"/>
        <div><b>{fighter.first_name} {fighter.last_name}</b></div>
        <div>{fighter.weight_class}</div>
      </div>
    ));
  }
}

export default FightersList;
