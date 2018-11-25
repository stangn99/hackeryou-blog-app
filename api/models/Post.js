const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: {
    type: String, 
    required: true
  }, 
  date: {
    type: Date, 
    default: new Date()
  },
  user: {
    type: Schema.Types.ObjectId, // This is how you establish the relationship with another Schema
    ref: 'User' // The name of the User model export
  }
})

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  }, 
  description: {
    type: String, 
    required: true
  },
  date: {
    type: Date, 
    default: new Date()  // This line automatically creates a new Date 
  },
  user: {
    type: Schema.Types.ObjectId,  // This is how you establish the relationship with another Schema
    ref: 'User' // The name of the User model export
  }, 
  comments: [commentSchema]  // Mongoose required the nested Schema to be declared first 
})


module.exports = {
  Post: mongoose.model("Post", postSchema),
  Comment: mongoose.model('Comment', commentSchema)
}