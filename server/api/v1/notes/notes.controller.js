const svc = require('./notes.service');

const addNote = (data, userId) => {
  return svc.addNote(data, userId);
};

const getNoteForUserID = (userId) => {
  return svc.getNoteForUserID(userId);
};

const updateNotes = (data, noteid) => {
  return svc.updateNotes(data, noteid);
};

const getNoteForNoteID = (noteid) => {
  return svc.getNoteForNoteID(noteid);
};

module.exports = {
  addNote,
  getNoteForUserID,
  updateNotes,
  getNoteForNoteID
};