import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
    Players.insert({
        name: 'Test',
        score: 18
    });

    console.log(Players.find().fetch());
});