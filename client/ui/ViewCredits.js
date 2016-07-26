/*jshint esversion: 6 */
import { Template } from 'meteor/templating';

import './ViewCredits.html';

Meteor.subscribe('iou.credits');

Template.ViewDebts.events({
  'button .addIOU'(event) {
    console.log("Clicked");
    //FlowRouter.go("/AddIOU");
  },
});

Template.ViewCredits.helpers({
  credits() {
      return IOU.find({});
  },
});
