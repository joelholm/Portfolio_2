import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';
import '../pages/people.html';


Template.people.helpers({
  people(){
    return Users.find();
  }
});
