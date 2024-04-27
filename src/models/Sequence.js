
const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  operations: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Sequence', sequenceSchema);


