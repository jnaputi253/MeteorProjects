import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.player._id,
      name: this.props.player.name,
      score: this.props.player.score
    };

    this.handlePointIncrement = this.handlePointIncrement.bind(this);
    this.handlePointDecrement = this.handlePointDecrement.bind(this);
    this.handlePlayerDeletion = this.handlePlayerDeletion.bind(this);
  }

  handlePointIncrement() {
    Players.update(this.state.id, {
      $inc: {score: 1}
    });

    this.setState({score: this.state.score + 1});
  }

  handlePointDecrement() {
    Players.update({_id: this.state.id}, {
      $inc: {'sc': 1}
    });

    this.setState({score: this.state.score - 1});
  }

  handlePlayerDeletion() {
    Players.remove({_id: this.state.id})
  }

  render() {
    return (
      <div className='item'>
        <p>{this.state.name} has {this.state.score} points!</p>
        <button className='button button--round' onClick={this.handlePointIncrement}>+1</button>
        <button className='button button--round' onClick={this.handlePointDecrement}>-1</button>
        <button className='button button--round' onClick={this.handlePlayerDeletion}>X</button>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}
