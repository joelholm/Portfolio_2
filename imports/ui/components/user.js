import { Template } from 'meteor/templating';
import { Users } from '../../api/users/users.js';
import '../pages/user.html';

Template.user.helpers({
  posts(arg1){
    return Users.find({username: arg1}).fetch()[0].posts;
  }
});
