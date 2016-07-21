import { Mongo } from 'meteor/mongo';

IOU = new Mongo.Collection('iou');

IOU.allow({
  insert: function(userId, doc){
    return !!userid; //only user id is allowed to insert
  }
});

Meteor.methods({
  insertIOU: function(iou) {
    return IOU.insert(iou);
  }
});

IOUSchema = new SimpleSchema({
  reason: {
    type: String,
    optional: true,
    label: "Reason"
  },
  amount: {
    type: Number,
    decimal:true,
    label: "Amount"
  },
  date: {
    type: Date,
    label: "Debt Date"
  },
  category: {
    type: String,
    optional: true,
    label: "Category"
  },
  typeOfIOU: {
    type: Number,
    allowedValues: [0, 1],
    autoform: {
      options: [
        {label: "Credit", value: 0},
        {label: "Debt", value: 1},
      ]
    }
  },
  who: {
    type: String,
    label: "I owe who"
  },
  portionPaid: {
    type: Number,
    optional: true,
    decimal:true,
    label: "Portion Paid"
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  },
  userId: {
    type: String,
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  }
});

IOU.attachSchema(IOUSchema);
