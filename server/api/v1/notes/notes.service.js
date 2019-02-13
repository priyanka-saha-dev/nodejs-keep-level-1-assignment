const dao = require('./notes.dao');

const addNote = (data, userId) => {
  return dao.addNote(data, userId);
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
  addNote,
  getNoteForUserID,
  updateNotes,
  getNoteForNoteID
};