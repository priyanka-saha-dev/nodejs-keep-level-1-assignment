const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  id: {
    type: String,
    unique: true,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true,
    enum: ['started', 'not-started', 'completed']
  },
  userId: {
    type: String,
    require: true
  },
  createdOn: {
    type: Date,
    require: true
  },
  modifiedOn: {
    type: Date
  }
});
module.exports = mongoose.model('notes', notesSchema);