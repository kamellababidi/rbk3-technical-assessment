## Back End

You are working on the back end for an application intended to support its users in exploring current job openings. You will do the following in 2 phases:

- **Model phase**
  - Write a `User` Mongoose model
  - Write a `Job` Mongoose model
  - Make the `User Model` and `Job Model` tests pass
- **Controller phase**
  - Write tests for a `userController` which will have 3 methods for performing MongoDB operations on users
  - Write the `userController` that will make your tests pass
  - Write tests for a `jobController` which will have 2 methods for performing MongoDB operations on jobs
  - Write the `jobController` that will make your tests pass

## Model phase

### User

- [ ] Look at the `exampleUser` object in `models/User.js`
  - It reflects the structure of the data you would like to persist for your users
- [ ] Inside `models/User.js`, use `mongoose` to create and export a `User` Mongoose model that has a schema that would handle an object with the same structure and keys as the `exampleUser` object already written
- [ ] Ensure all of the `User Model` tests pass (`npm test` inside this problem's directory to run the tests)

### Job

- [ ] Inside `models/Job.js`, use `mongoose` to create and export a `Job` Mongoose model that has a schema that would handle an object with the following properties:
  - `company` - The name of the company the job is for
  - `title` - The title of the job
  - `description` - A description of the job
  - `postedDate` - When the job became available
  - `salary` - The offered salary for the position
- [ ] Ensure all of the `Job Model` tests pass

## Controller Phase

### User

- [ ] Look at `controllers/userController.js`
  - It contains a skeleton for the methods that should be exported by the User controller
- [ ] Look at `controllers/userControllerTest.js`
  - It contains a skeleton to write tests for the not-yet-written `userController`
- [ ] Inside `controllers/userControllerTest.js`, write in the unit tests for the `userController` methods
  - Use the skeleton `it` statements provided
- [ ] Inside `controllers/userController.js`, build out the method skeletons provided and make your tests pass

### Job

- [ ] Look at `controllers/jobController.js`
  - It contains a skeleton for the methods that should be exported by the `jobController`
- [ ] Inside `controllers/jobControlerTest.js`, write unit tests for the `jobController` methods
  - You will need to do more of the setup work for these tests than you did for the User controller
- [ ] Inside `controllers/userController.js`, build out the methods described and make your tests pass

## Available Resources

- MDN
- Stack Overflow
- NodeJS docs
- Mongoose docs
- Mocha docs
