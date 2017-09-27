var _ = require('underscore');
var chai = require('chai');
var expect = chai.expect;
var Users = require('../models/users.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));


describe('Users Model', function () {
  var testUsers;

  beforeEach(function () {
    testUsers = [
      {
        id: 1,
        name: 'Taka',
        email: 'taka@taka.com'
      },
      {
        id: 2,
        name: 'Nayo',
        email: 'nayo@nayo.com'
      },
      {
        id: 3,
        name: 'Amrit',
        email: 'amrit@amrit.com'
      }
    ];

    Users.setAll(testUsers);
  });

  // Fill this out if you like..
});
