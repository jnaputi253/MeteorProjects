import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

const PlayerList = ({players}) => {
  if(players.length === 0) {
    return (
      <div className='item'>
        <p className='item__message'>Add your first player to get started</p>
      </div>
    );
  } else {
    return (
      <div>
        {players.map(player => {
          return <Player key={player._id} player={player} />;
        })}
      </div>
    );
  }


}

export default PlayerList;

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
