import { Template } from 'meteor/templating';
import { Users } from '../../api/users/users.js';
import '../pages/people.html';


Template.people.helpers({
  people(){
    return Users.find();
  }
});

Template.people.events({
  'click .viewUser': function(event){
    var username = event.target.getAttribute('username');

    BlazeLayout.render('user', { user: username });
    //TODO:
  }
});
