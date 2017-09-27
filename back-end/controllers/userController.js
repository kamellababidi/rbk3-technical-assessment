//require the users schema to makeoperation on it
var users=require('../models/Users.js')
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  //run mongoose operation command 
  users.findOne({'name':name},'name email',function(err,result){
  	//checking if there is error in sending query to database 
  	if(err){
  		callback(err,null)
  	}
  	// if no error return data
  	callback(null,result)
  })
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  //run mongoose operation command 
  users.update({'name':name},{'email':newEmail},function(err,result){
  	//checking if there is error in sending query to database 
  	if(err){
  		callback(err,null)
  	}
  	// if no error return data
  	callback(null,result)
  })
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  //run mongoose operation command 
  users.find({},function(err,result){
  	//checking if there is error in sending query to database 
  	if(err){
  		callback(err,null)
  	}
  	// if no error return data
  	callback(null,result)
  })
};
