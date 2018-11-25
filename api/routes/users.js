// Get Users

const express = require('express');
const Router = express.Router;
const router = Router();

// Require our User Model
const User = require ('../models/User');

// Get /users
router.get('/', async(req, res, next) => {

  try {
    // 1. Find all of the users in the DB
    const docs = await User.find();

  // 2. If successful send back 200 OK to our front-end with the users
    res.status(200).send({
      // this will send back an array of results
      data: docs
    })

  } catch (e) {
    // 3. If unsuccesful send the error into our error handler
    next(e);
  }
})

// GET /users/:user_id
// When you have /:someparam...in express this will get stored in req
router.get('/:user_id', async(req, res, next) => {
  // 1. Get the userid out of the params
  const userId = req.params.user_id;

  try {
    // 2. Lookup the user by that ID
    const doc = await User.findById(userId)

    // 3. If we find the user, send back too + user doc
    res.status(200).send({
      data: [doc]
    })
  } catch (err) {
    // 4. if not found, handle error
    next(err)
  }
})

// Export router so that it is available to our server
module.exports = router;