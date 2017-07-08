import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    id: '1',
    name: 'Ashley',
    score: 10
}, {
    id: '2',
    name: 'Juan',
    score: 9
}, {
    id: '3',
    name: 'Stormi',
    score: 8
}, {
    id: '4',
    name: 'Andrew',
    score: 7
}];

const renderPlayers = () => {

}

Meteor.startup(() => {
    let title = 'Scor Keep';
    let name = 'Juan';
    let jsx = (
        <div>
            <h1>Hello, {name}!</h1>
            <p>This is my second paragraph :p</p>
        </div>

    );
    ReactDOM.render(
        jsx,
        document.querySelector('#app')
    );
});