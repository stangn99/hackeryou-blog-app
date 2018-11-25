// Require our Post model so we can create new users (we descructure because we have two models in one file/export)
const { Post, Comment } = require('../models/Post');

// Require our fake users
const users = require('./users')

// Create an array to store our fake posts
const posts = [];

// Create a fake comment (talia)
const comment = new Comment({
  body: 'This is more of a comment than a question...',
  user: users[1]
})



// Create a fake post (mark)
const post = new Post({
  title: 'Typescript is awesome: a haiku',
  description: 'Enclosed find my poem on Typescript',
  user: users[0]
});





// Add Talia's comment to Mark's post
post.comments.push(comment)

// The post.comments.push looks weird to me, here's what happens:

// { date: 2018-11-25T18:30:44.939Z,
//   _id: 5bfaea545574552802aaed64,
//   title: 'Typescript is awesome: a haiku',
//   description: 'Enclosed find my poem on Typescript',
//   user: { _id: 5bfaea545574552802aaed61, name: 'Mark' },
//   comments:
//    [ { date: 2018-11-25T18:30:44.938Z,
//        _id: 5bfaea545574552802aaed63,
//        body: 'This is more of a comment than a question...',
//        user: [Object] } ] }


module.exports = post