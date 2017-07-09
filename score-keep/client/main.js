import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

const renderPlayers = (playerList) => {
    return playerList.map(player => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} points!
            </p>
        );
    });
}

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score Keep';
        let name = 'Juan';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <h1>Hello, {name}!</h1>
                <p>This is my second paragraph :p</p>
                {renderPlayers(players)}
            </div>

        );
        ReactDOM.render(
            jsx,
            document.querySelector('#app')
        );
    });
});