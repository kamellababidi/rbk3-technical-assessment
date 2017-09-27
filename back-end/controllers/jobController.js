//require the jobs schema to makeoperation on it
var job=require('../models/Job.js')
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  //prepare a record based on job properties passed to function
  var record = new job({company:job.company , title:job.title , description:job.description , postedDate:job.postedDate , salary:job.salary});
  // put this record inside database
  record.save(function(err,result){
  	//checking for errors
  	if(err){
  		callback(err,null)
  	}
  	//return verification
  	callback(null,result)
  })
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  //make a query to fetch all job's salary greater than 50000
  job.find({salary:{$gt:50000}},function(err,result){
  	//checking for errors
  	if(err){
  		callback(err,null)
  	}
  	//return the result of this query 
  	callback(null,result)
  })
};
