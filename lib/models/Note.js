const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 24
  },
  body: {
    type: String,
    required: true,
    max: 256
  }
});

module.exports = mongoose.model('Note', noteSchema);
