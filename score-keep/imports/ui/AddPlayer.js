import React, { Component } from 'react';

export default class AddPlayer extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' name='playerName' placeholder='Player name' />
          <button type='submit'>Add Player</button>
        </form>
      </div>
    );
  }
}
