var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
app.get('/api/users',function(req,res){
	res.status(200)
	res.send(JSON.stringify(Users.getAll()));
})
app.post('/api/users',function(req,res){
	 var name1=req.body.name;
	 var email1=req.body.email;
	 var x={name:name1,email:email1}
	 Users.addOne({name:name1,email:email1})
	 res.status(201)
	 res.send(JSON.stringify(x))
})

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

