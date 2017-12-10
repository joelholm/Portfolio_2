import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Users } from '../../api/users/users.js';
import '../pages/home.html';


Template.home.onRendered(function(){
  $(".main").css("visibility","visible");
  $("#newPostDiv").hide();
  $("#postSuccess").toggle();

  $("#newPostButton").click(function(){
    $("#newPostDiv").toggle();
    $("#newPostButton").toggle();
  });

  $("#submitPostButton").click(function(){
    $("#newPostButton").toggle();
    $("#newPostDiv").hide();
    $("#postSuccess").toggle().delay(2000).fadeToggle(500);
  });

  $("#cancelPostButton").click(function(){
    $("#newPostButton").toggle();
    $("#newPostDiv").hide();
  });

});


Template.home.helpers({
  posts(){
    return Users.find({ _id: Meteor.userId() }).fetch()[0].posts;
  },
  username(){
    return Users.find({ _id: Meteor.userId() }).fetch()[0].username;
  }
});


Template.home.events({
  'click #submitPostButton': function() {
    var postBody = $("#postBody").val();
    Users.update(
      { _id :  Meteor.userId() },
      { $addToSet : { posts : { body: postBody , createdAt: new Date() } } }
    );
  },
  'click .deletePostButton': function(event) {
    //pull the date that this post was created
    var postBody = event.target.getAttribute('postBody');
    //delete that post from the database
    Users.update(
      { _id :  Meteor.userId() },
      { $pull : { posts: { body: postBody } } }
    );
  }

});
