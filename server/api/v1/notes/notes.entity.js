const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  text: {
    type: String
  },
  state: {
    type: String,
    enum: ['started', 'not-started', 'completed']
  },
  userId: {
    type: String
  },
  createdOn: {
    type: Date
  },
  modifiedOn: {
    type: Date
  }
});
module.exports = mongoose.model('notes', notesSchema);