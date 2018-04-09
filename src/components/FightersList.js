import React, { Component } from 'react';
import Modal from 'react-modal';
import './FightersList.css';
import FightersListItem from './FightersListItem';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class FightersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      currentFighter: {}
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClickFighterItem = this.handleClickFighterItem.bind(this);
  }

  openModal(dataFighter) {
    this.setState({modalIsOpen: true, currentFighter: dataFighter});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false, currentFighter: {}});
  }

  handleClickFighterItem(dataFighter, event) {
    this.openModal(dataFighter);
  }

  render() {
    return (
      <div className="FightersList">
        {
          this.props.listData.map(fighter => (
            <FightersListItem key={fighter.id} dataFighter={fighter} onClick={this.handleClickFighterItem} />
          ))
        }
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="App-modal-header">
            <h2>Fighter</h2>
            <button className="App-modal-close" onClick={this.closeModal}>x</button>
          </div>
          <div className="App-modal-body fighter-content">
            <div className="fighter-content-full-img" style={{float: 'left'}}>
              <img src={this.state.currentFighter.left_full_body_image} alt="fighter-full-img" />
            </div>
            <div className="fighter-content-detail" style={{float: 'left'}}>
              <div>
                <label>Name</label>
                <p>{this.state.currentFighter.first_name + ' ' + this.state.currentFighter.last_name}</p>
              </div>
              <div>
                <label>Wins/Losses/Draws</label>
                <p>{this.state.currentFighter.wins + '/' + this.state.currentFighter.losses + '/' + this.state.currentFighter.draws}</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default FightersList;
