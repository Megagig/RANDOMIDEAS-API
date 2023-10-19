const mongoose = require('mongoose');
const IdeaSchema = new mongoose.Schema({
  text: {
    type: 'string',
    required: [true, 'Please Add a text field'],
  },
  tag: {
    type: 'string',
  },
  usernames: {
    type: 'string',
  },
  date: {
    type: 'string',
    default: Date.now,
  },
});

module.exports = mongoose.model('Idea', IdeaSchema);
