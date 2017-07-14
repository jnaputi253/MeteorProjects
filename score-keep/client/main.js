import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (playerList) => {
    return playerList.map(player => {
        return (
            <div key={player._id}>
                <p>
                    {player.name} has {player.score} points!
                    <button onClick={() =>
                        Players.update(player._id, {
                            $inc: {score: 1}
                        })
                    }>+1</button>
                    <button onClick={() => {
                        Players.update(player._id, {
                            $inc: {score: -1}
                        })
                    }}>-1</button>
                    <button onClick={() => {Players.remove(player._id)}}>X</button>
                </p>
            </div>
        );
    });
}

const App = () => {
    let players = Players.find().fetch();
    return (
        <div>
          <TitleBar />
          <div>
            {renderPlayers(players)}
          </div>
          <AddPlayer score={10} />
        </div>
    );
}

Meteor.startup(() => {
    Tracker.autorun(() => {
        ReactDOM.render(
            <App />,
            document.querySelector('#app')
        );
    });
});
