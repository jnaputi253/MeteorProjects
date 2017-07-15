import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import App from './../imports/ui/App';

Meteor.startup(() => {
  let title = 'Score Keep';

  Tracker.autorun(() => {
      ReactDOM.render(
          <App title={title} />,
          document.querySelector('#app')
      );
  });
});
