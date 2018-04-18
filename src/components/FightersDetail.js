import React, { Component } from 'react';
import './FightersDetail.css';

class FightersDetail extends Component {
  render() {
    let imgElement = this.props.fighterData.left_full_body_image ? (
      <div className="FightersDetail-body-image">
        <img src={this.props.fighterData.left_full_body_image} alt="fighter-full-img" />
      </div>
    ) : '';
    let nicknameElement = this.props.fighterData.nickname ? (
      <div>
        <label className="FightersDetail-info-label">Nickname</label>
        <p>{this.props.fighterData.nickname}</p>
      </div>
    ) : '';
    let rankElement = this.props.fighterData.rank ? (
      <div>
        <label className="FightersDetail-info-label">{this.props.fighterData.rank === 'C' ? 'Champion' : '#' + this.props.fighterData.rank}</label>
      </div>
    ) : '';

    return (
      <div className="FightersDetail">
        { imgElement }
        <div className="FightersDetail-info">
          { rankElement }
          <div>
            <label className="FightersDetail-info-label">Name</label>
            <p>{this.props.fighterData.first_name + ' ' + this.props.fighterData.last_name}</p>
          </div>
          { nicknameElement }
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
