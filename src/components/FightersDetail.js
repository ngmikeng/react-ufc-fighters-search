import React, { Component } from 'react';
import './FightersDetail.css';

class FightersDetail extends Component {
  render() {
    return (
      <div className="FightersDetail">
        <div className="FightersDetail-body-image">
          <img src={this.props.fighterData.left_full_body_image} alt="fighter-full-img" />
        </div>
        <div className="FightersDetail-info">
          <div>
            <label className="FightersDetail-info-label">Name</label>
            <p>{this.props.fighterData.first_name + ' ' + this.props.fighterData.last_name}</p>
          </div>
          <div>
            <label className="FightersDetail-info-label">Wins/Losses/Draws</label>
            <p>{this.props.fighterData.wins + '/' + this.props.fighterData.losses + '/' + this.props.fighterData.draws}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FightersDetail;
