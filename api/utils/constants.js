'use strict';

exports.PORT = process.env.PORT || 3001;
exports.SECRET = process.env.SECRET || 'super-secret-passphrase';


// Add new line to add path to our database
// We want to check in our current environment (our computer to see if it has DB_URI)
// on for example, Heroku, the environemnt will have DB_URI
exports.DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/blog'