import React, { Component } from 'react';
import { Players } from './../api/players';

export default class AddPlayer extends Component {
  handleSubmit(e) {
    console.log('AddPlayer::handleSubmit() called');
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if(playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' name='playerName' placeholder='Player name' />
          <button type='submit'>Add Player</button>
        </form>
      </div>
    );
  }
}
