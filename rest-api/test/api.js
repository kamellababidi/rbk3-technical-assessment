var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../index.js');
var Users = require('../models/users.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));

var testUsers = [
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

// Return a JSON object back from the response
// Handles both `res.send(JSON.stringify({}))` and `res.json({})`
var getBody = function (res) {
  return JSON.parse(res.text);
};

describe('RESTful API', function () {

  beforeEach(function () {
    // Send a deep copy in so internal mutations do not affect our `testUsers` array above
    // Note: This copy technique works because we don't have any functions
    var usersCopy = JSON.parse(JSON.stringify(testUsers));
    Users.setAll(usersCopy);
  });

  describe('/api/users', function () {

    describe('GET', function () {

      it('responds with a 200 (OK)', function (done) {

        request(app)
          .get('/api/users')
          .expect(200, done);

      });

    });

    describe('POST', function () {

      var newUser = {
        name: 'Josh',
        email: 'josh@josh.io'
      };

      it('responds with a 201 (Created) when a valid user is sent', function (done) {

        request(app)
          .post('/api/users')
          .send(newUser)
          .expect(201, done);

      });

    });

  });

  describe('/api/users/:id', function () {

    describe('GET', function () {

      it('responds with a 200 (OK) when a user with a matching `id` exists', function (done) {

        request(app)
          .get('/api/users/1')
          .expect(200, done);

      });


    });

    describe('PUT', function () {

      it('responds with a 200 (OK) when a user with the matching `id` is updated', function (done) {

        request(app)
          .put('/api/users/1')
          .send({ name: 'Taka-san' })
          .expect(200, done);

      });

    });

    describe('DELETE', function () {

      it('responds with a 200 (OK) when a user with the matching `id` is deleted', function (done) {

        request(app)
          .delete('/api/users/1')
          .expect(200, done);

      });


    });

  });

});
