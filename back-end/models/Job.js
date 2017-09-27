// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose=require('mongoose');
// create new instance of schema
var Schema=mongoose.Schema;
//make acctual schema which is jobs
var jobschema = new Schema({
	company: String,
	title: String,
	description: String,
	postedDate: String,
	salary : Number
});
//make mode for this schema 
var jobs=mongoose.model('jobs',jobschema);
//export this schema to be shown to all files 
module.exports=jobs;

