import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FightersDetail.css';

class FightersDetail extends Component {
  render() {
    return (
      <div className="FightersDetail">
      {this.props.fighterData.left_full_body_image ? (
        <div className="FightersDetail-body-image">
          <img src={this.props.fighterData.left_full_body_image} alt="fighter-full-img" />
        </div>
      ) : null}
        <div className="FightersDetail-info">
        {this.props.fighterData.rank ? (
          <div>
            <label className="FightersDetail-info-label">{this.props.fighterData.rank === 'C' ? 'Champion' : '#' + this.props.fighterData.rank}</label>
          </div>
        ) : null}
          <div>
            <label className="FightersDetail-info-label">Name</label>
            <p>{this.props.fighterData.first_name + ' ' + this.props.fighterData.last_name}</p>
          </div>
        {this.props.fighterData.nickname ? (
          <div>
            <label className="FightersDetail-info-label">Nickname</label>
            <p>{this.props.fighterData.nickname}</p>
          </div>
        ) : null}
          <div>
            <label className="FightersDetail-info-label">Wins/Losses/Draws</label>
            <p>{this.props.fighterData.wins + '/' + this.props.fighterData.losses + '/' + this.props.fighterData.draws}</p>
          </div>
        </div>
      </div>
    );
  }
}

FightersDetail.propTypes = {
  fighterData: PropTypes.object.isRequired
};

export default FightersDetail;
