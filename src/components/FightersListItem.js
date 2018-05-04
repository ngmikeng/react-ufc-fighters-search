import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FightersListItem.css';

class FightersListItem extends Component {
  render() {
    return (
      <div className="FightersList-item">
        <img src={this.props.dataFighter.thumbnail} alt="thumbnail"/>
        <div><b>{this.props.dataFighter.first_name} {this.props.dataFighter.last_name}</b></div>
        <div>{this.props.dataFighter.weight_class ? this.props.dataFighter.weight_class.replace('_', ' ') : ''}</div>
        <button type="button" onClick={this.props.onClick.bind(this, this.props.dataFighter)} style={{ cursor: 'pointer' }}>View Detail</button>
      </div>
    );
  }
}

FightersListItem.propTypes = {
  dataFighter: PropTypes.object.isRequired
};

export default FightersListItem;
