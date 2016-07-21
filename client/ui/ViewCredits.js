import { Template } from 'meteor/templating';

import './ViewCredits.html';

Meteor.subscribe('iou.credits');

Template.ViewCredits.helpers({
  credits() {
      return IOU.find({});
  },
});
