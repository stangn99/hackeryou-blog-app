// Require Mongoose
const mongoose = require('mongoose');

// Store reference to mongoose.Schema in variable
const Schema = mongoose.Schema;

// Define the schema
const userScheme = new Schema({
  name: {
    type: String, 
    required: true
  }
})

// Create the model and export it. 
module.exports = mongoose.model("User", userScheme)