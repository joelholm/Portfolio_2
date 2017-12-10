FlowRouter.route('/',{
  name: 'login',
  action() {
    BlazeLayout.render('login');
  }
});

FlowRouter.route('/createAccount',{
  name: 'createAccount',
  action() {
    BlazeLayout.render('createAccount');
  }
});

FlowRouter.route('/home',{
  name: 'home',
  action() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/people',{
  name: 'people',
  action() {
    BlazeLayout.render('people');
  }
});

FlowRouter.route('/friends',{
  name: 'friends',
  action() {
    BlazeLayout.render('friends');
  }
});
