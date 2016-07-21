import { Template } from 'meteor/templating';
//import { Debts } from '../../collections/debts.js';

//import '../../collections/debts.js';
import './add_person.js';
import './ViewDebts.html';

Meteor.subscribe('iou.debts');

Template.ViewDebts.helpers({
  debts() {
      return IOU.find({});
  },
});
