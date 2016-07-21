import { Mongo } from 'meteor/mongo';
//export const
People = new Mongo.Collection('people');

PeopleSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  email: {
    type: String,
    label: "E-Mail"
  },
  photo: {
    type: String,
    label: "Photo"
  }
});

People.attachSchema(PeopleSchema);
