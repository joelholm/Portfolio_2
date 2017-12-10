import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/ui/components/home.js';
import '../imports/ui/components/people.js';
import '../imports/ui/components/friends.js';
import '../imports/ui/components/login.js';
import '../imports/ui/components/createAccount.js';
import '../imports/ui/components/user.js';

import '../imports/ui/pages/navbar.html';

import '../imports/startup/client/routes.js';

import { Users } from '../imports/api/users/users.js';
import '../imports/api/users/methods.js';
