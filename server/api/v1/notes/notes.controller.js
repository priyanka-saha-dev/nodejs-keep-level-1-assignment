const svc = require('./notes.service');

const createNote = (noteData, userId) => {
  return svc.createNote(noteData, userId);
};

module.exports = {
    createNote
};