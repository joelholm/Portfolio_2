import { Template } from 'meteor/templating';
import { Users } from '../../api/users/users.js';

import '../pages/createAccount.html';
import '../../api/users/methods.js';

Template.createAccount.onRendered(function() {
  $("#createAccountFail").toggle();
});

Template.createAccount.events({
  'click #createAccountButton'(event) {
    //get elemnents from DOM
    var username = $("#username").val();
    var password = $("#password").val();

    Meteor.call('myCreateUser', {
      username: username,
      password: password
    }, (err, res) => {
      if (err) {
        //alert(err);
      } else {
        if( res == ""){
          //if the message was good ("") go to login screen
          BlazeLayout.render('login');
        } else {
          //else display the message so that the person can change any required fields
          $("#createAccountFail").html(res);
          $("#createAccountFail").toggle(1000).delay(3000).toggle(1000);
        }
      }
    });
  },

});
