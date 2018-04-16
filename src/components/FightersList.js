import React, { Component } from 'react';
import Modal from 'react-modal';
import './FightersList.css';
import FightersListItem from './FightersListItem';
import FightersDetail from './FightersDetail';

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
          <div className="App-modal-body">
            <FightersDetail fighterData={this.state.currentFighter} />
          </div>
        </Modal>
      </div>
    )
  }
}

export default FightersList;
