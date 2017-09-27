# Rest API

You've been provided with `index.js`, a bare-bones Express web server that will listen on port 8888. Start this server by running `npm start` inside this problem's directory. Using the content of `models/users.js` as user data, (made available to you already in `index.js`), build out the following API:

|      URL       | HTTP Verb | Request Body |                         Result                          |
|:--------------:|:---------:|:------------:|:-------------------------------------------------------:|
| /api/users     |    GET    |    empty     |                                Return JSON of all users |
| /api/users     |    POST   |     JSON     |            Create new user* and return JSON of new user |
| /api/users/:id |    GET    |    empty     |           Return JSON of single user with matching `id` |
| /api/users/:id |    PUT    |     JSON     | Update user** with matching `id` and return JSON of user|
| /api/users/:id |   DELETE  |    empty     |  Delete user with matching `id` and return JSON of user |
*New users should be assigned __a numeric auto-incremented__ `id` when created

**The request body can contain a __partial user object__ of properties to update (e.g. an object with only a `name` property and not an `email` property)

The JSON representation of a single user looks like this:
```json
{
  "name": "Dan",
  "email": "danthareja@hackreactor.com"
}
```

Some tests have been provided for you to get you started. Run `npm test` inside this problem's directory. __Passing these tests only means you are part of the way to completing the API.__ You should aim to pass them however, as they will ensure at least that your server is up and listening at the correct routes.

Your API will be further tested during code review by sending GET, POST, PUT and DELETE requests to the above endpoints. If you wish to interact with your server during development (recommended), consider using [Postman](https://www.getpostman.com/).

Your web server will not and does not need to persist data. It should, however, interact with `models/users.js`, and reflect any changes that have occured over the course of a given session. 

In order to accomplish this you will need to build out the helper functions in `models/users.js`. Those functions need to interact with the objects in the `users` array to serve data and enact changes over a given server session. `underscore` is been installed so feel free to use it if you wish.
