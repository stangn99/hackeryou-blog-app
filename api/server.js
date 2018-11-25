'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Anytime /users is hit, let routes/users.js handle the request
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));


app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [
      { message: 'unauthorized' },
    ];

    res.status(401).json({ errors });
  }
});

module.exports = app;



// 1. Create your DB models(s)
// 2. Create your seeds to test your models with fake data
// 3. Setup your Util/Constants.js to include your DB_URI path 
// 4. Setup your index.js file (IN THE ROOT OF THE FOLDER) to require the PORT and DB_URI, along with ASYNC Mongoose.Connect
// 5. Setup your api/routes to handle getting/posting/patching (routes/posts.js, routes/users.js)
// 6. Modify your server.js file to APP.USE the route you create to handle the request