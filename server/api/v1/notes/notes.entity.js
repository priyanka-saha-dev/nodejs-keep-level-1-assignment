// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const notesSchema = new Schema({
//   id: {
//     type: String,
//     unique: true
//   },
//   title: {
//     type: String
//   },
//   text: {
//     type: String
//   },
//   state: {
//     type: String,
//     enum: ['started', 'not-started', 'completed'],
//     default: 'not-started'
//   },
//   userId: {
//     type: String
//   },
//   createdOn: {
//     //type: Date
//     type: String,
//     default: Date.now(),
//   },
//   modifiedOn: {
//     //type: Date
//     type: String,
//     default: Date.now(),
//   }
// });

// notesSchema.methods.findByUserId = function (callback) {
//   return this.model('notes')
//     .find({
//       $or: [
//         { userId: this.userId },
//         { collaborators: { $elemMatch: { userId: this.userId } } }
//       ]
//     })
//     .exec(callback);
// };

// notesSchema.methods.findAndUpdateNote = function (callback) {
//   return this.model('notes').findOneAndUpdate(
//     { id: this.id },
//     {
//       $set: {
//         title: this.title,
//         text: this.text,
//         state: this.state,
//         modifiedOn: Date.now()
//       }
//     },
//     { new: true },
//     callback);
// };

// module.exports = mongoose.model('notes', notesSchema);
let mongoose = require('mongoose');

// define the noteSchema model
let Schema = mongoose.Schema;
const NoteSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  state: {
    type: String,
    default: 'not-started'
  },
  userId: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now()
  },
  modifiedOn: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('note', NoteSchema);
