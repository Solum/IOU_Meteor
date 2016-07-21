import { Template } from 'meteor/templating';
import { People } from '../../collections/people.js';

import '../../collections/people.js';
import './add_person.html';

Template.addPerson.events({
  'submit .new-person'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const _name = target.personName.value;

    // Insert a task into the collection
    People.insert({
      name: _name,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.personName.value = '';
  },
});
