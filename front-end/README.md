# Front End

You've been given a working backend that implements the following api:

|       URL      | HTTP Verb | POST Body |                   Result                      |
|:--------------:|:---------:|:---------:|:---------------------------------------------:|
| /api/users     |    GET    |   empty   |                      Return JSON of all users |
| /api/users     |    POST   |    JSON   |                               Create new user |
| /api/users/:id |    GET    |   empty   | Return JSON of single user with matching `id` |

Your goal will be to **implement using either Angular, Backbone, or a ReactJS / jQuery combo, a single page front end to interact with this api.** Your front end should allow the user to add new users, and view current users, and should express your understanding of what a well-structured application (albeit a small one) looks like.

Running `npm start` inside this problem's directory will launch a web server listening on port 3000 that serves files in the `public` directory (including `public/index.html`), as well as the entire backend.

`public/index.html` should contain your application. Build out other files you need **inside the `public` directory** and add them to `index.html` with script tags as needed.

Use bower to install your front-end dependencies. A `.bowerrc` file is already present in this directory so that whatever you install using bower will reside inside `public/bower_components`. A `.gitignore` file is already present so that dependencies installed with bower are not pushed up to GitHub.

Be sure, by trying it yourself, that future viewers of your app will be able to run your application with `npm start`, even if they need to run `bower install` first.

You can look at the existing data at any time during development (assuming you've run `npm start` inside this problem's directory) by navigating to `http://localhost:3000/api/users`.

## Available Resources

- MDN
- Stack Overflow
- Official docs for whatever front end library/framework you decide to use
