const mongoose = require('mongoose');

// Connect to MongoDB and Creating a Database
mongoose.connect('mongodb://127.0.0.1:27017/practice')

// Create schema - structure
const userSchema = mongoose.Schema({
  name:String,
  age: Number,
  email: String
})

module.exports =mongoose.model('User',userSchema);