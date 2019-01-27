const dao = require('./notes.dao');

const createNote = (noteData, userId) => {
  return dao.createNote(noteData, userId);
};

module.exports = {
    createNote
};