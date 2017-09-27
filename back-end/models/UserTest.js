var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('./User.js');

describe('User Model', function () {

  it('User should be a Mongoose model', function () {
    expect(new User()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(User.schema).to.exist;
  });


});
