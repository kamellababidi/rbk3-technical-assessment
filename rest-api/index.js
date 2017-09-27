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
	 Users.addOne(x)
	 res.status(201)
	 res.send(JSON.stringify(x))
})
app.get('/api/users/:tagId',function(req,res){
	//req.params.tagId
	//res.status(200)
	var p=parseInt(req.params.tagId);  
	var x=Users.getOne(p);
	res.status(200)
	res.send(JSON.stringify(x));
})
app.put('/api/users/:tagId',function(req,res){
	var p=parseInt(req.params.tagId);
	if(req.body.name && req.body.email){
		var obj={name:req.body.name , email:req.body.email}
	    var x=Users.updateOne(p,obj);
	    res.status(200)
	    res.send(JSON.stringify(x))
	}
	
})
app.delete('/api/users/:tagId',function(req,res){
	var p=parseInt(req.params.tagId);
	var x=Users.deleteOne(p)
	res.status(200)
	res.send(JSON.stringify(x))
})


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

