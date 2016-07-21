//import '../collections/debts.js';

Meteor.publish('iou.debts', function() {
  return IOU.find({userId: this.userId, typeOfIOU: 1 });
});

Meteor.publish('iou.credits', function() {
  return IOU.find({ userId: this.userId, typeOfIOU: 0 });
});
