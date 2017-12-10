import { Template } from 'meteor/templating';
import { Users } from '../../api/users/users.js';
import '../pages/login.html';
import '../../api/users/methods.js';

Template.login.onRendered(function() {
  $("#loginFail").toggle();
});

Template.login.events({
  'click #loginButton'(event) {
    //get elemnents from DOM
    var username = $("#username").val();
    var password = $("#password").val();

    //check the entered fields
    Meteor.call('loginUser',{
      username: username,
      password: password
    }, (err,res) => {
      if(err){

      } else {
        if( res == ""){
          //if the message was good ("") go to home screen
          BlazeLayout.render('home');
        } else {
          //else display the message so that the person can change any required fields
          $("#loginFail").html(res);
          $("#loginFail").toggle(1000).delay(3000).toggle(1000);
        }
      }
    });

  },

});
