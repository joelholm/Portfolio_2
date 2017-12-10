import { Users } from './users.js';

Meteor.methods({
  /*
  * This method will create a new user and do a bit of validation
  */
  'myCreateUser'({ username , password }){
    var errorMes = "";

    //make sure that there is a password and Username
    if( username == "" || password == ""){
      errorMes = "Blank Fields";
    }
    //make sure that the username is unique
    var dupUser = Users.find({ username: username }).count();
    if( dupUser > 0 ) {
      errorMes = "Username Already Taken";
    }
    //add the user to the database if everything checks out
    if( errorMes == "" ){
      Users.insert({
        username: username,
        password: password,
        posts: [],
        friends: []
      });
    }

    return errorMes;
  },
  'loginUser'({ username , password}){
    var errorMes = "";

    //check that the username and password aren't both blank
    if( username == "" || password == ""){
      errorMes = "Blank Fields";
    } else {
      //find the user with that username
      var user = Users.find({username: username});
      if( user.count() != 1 ){
        errorMes = "Username doesn't Exist";
      } else {
        //check that the passwords match
        var userPassword = user.fetch()[0].password;
        if( password != userPassword ){
          errorMes = "Wrong Password";
        } else {
          //log that person in
          this.setUserId(user.fetch()[0]._id);
        }
      }
    }
    return errorMes;
  },
});
