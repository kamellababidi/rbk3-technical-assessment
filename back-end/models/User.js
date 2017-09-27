// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};
//require  mongoose module 
var mongoose=require('mongoose');
// create new instance of schema
var Schema=mongoose.Schema;
//make acctual schema which is users
var usersschema = new Schema({
	name: String ,
	email : String
});
//make mode for this schema 
var users=mongoose.model('users',usersschema);
//export this schema to be shown to all files 
module.exports=users;


