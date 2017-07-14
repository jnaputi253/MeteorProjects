import React from 'react';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import { Players } from './../api/players';

const App = () => {
  let players = Players.find().fetch();
  console.log("Rendering the App component");
  return (
    <div>
      <TitleBar title='Score Keep' />
      <PlayerList players={players} />
      <AddPlayer />
    </div>
  );
}

export default App;
