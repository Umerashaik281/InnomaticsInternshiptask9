const mongoose = require('mongoose');

// Define To-Do Schema
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  }
});

// Export the model
module.exports = mongoose.model('Todo', TodoSchema);
