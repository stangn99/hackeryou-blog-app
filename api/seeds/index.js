const mongoose = require('mongoose');

const User = require('../models/User')
const { Post } = require('../models/Post');
const users = require('./users');
const post = require('./post.js');
const uri = 'mongodb://localhost:27017/blog';


// Empty the DB everytime the seeds/test runs
const truncateDatabase = async () => {
  return Promise.all(
    [User.deleteMany(), Post.deleteMany()]
    )
}


const makeSeeds = async () => {
try {
    // connec to our db
    await mongoose.connect(uri);

    // once connected, delete all the old stuff
    await truncateDatabase();
  
    // once old stuff is deleted, add fake users to db
    await Promise.all(users.map((user) => {
      return user.save()
    }))
  
    // Save our seeded post into the databse
    await post.save();
  
    // Once finished, close the connection
    mongoose.connection.close();
} catch (error) {
  console.log(error)
}
}


// Run the function to run the seeds
makeSeeds();