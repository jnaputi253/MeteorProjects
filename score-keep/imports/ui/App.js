import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import { Players } from './../api/players';


const App = ({title}) => {
  let players = Players.find({}, {sort: {score: -1}}).fetch();

  return (
    <div>
      <TitleBar title={title} />
      <PlayerList players={players} />
      <AddPlayer />
    </div>
  );
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired
}
