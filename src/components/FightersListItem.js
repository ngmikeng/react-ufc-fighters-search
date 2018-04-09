import React, { Component } from 'react';
import './FightersListItem.css';

class FightersListItem extends Component {
  render() {
    return (
      <div className="FightersList-item" onClick={this.props.onClick.bind(this, this.props.dataFighter)}>
        <img src={this.props.dataFighter.thumbnail} alt="thumbnail"/>
        <div><b>{this.props.dataFighter.first_name} {this.props.dataFighter.last_name}</b></div>
        <div>{this.props.dataFighter.weight_class ? this.props.dataFighter.weight_class.replace('_', ' ') : ''}</div>
      </div>
    );
  }
}

export default FightersListItem;
