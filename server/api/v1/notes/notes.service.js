const dao = require('./notes.dao');

const createNote = (data, userId) => {
  return dao.createNote(data, userId);
};

const getNoteForUserID = (userId) => {
  return dao.getNoteForUserID(userId);
};

const updateNotes = (data, noteid) => {
  return dao.updateNotes(data, noteid);
};

const getNoteForNoteID = (noteid) => {
  return dao.getNoteForNoteID(noteid);
};

module.exports = {
  createNote,
  getNoteForUserID,
  updateNotes,
  getNoteForNoteID
};