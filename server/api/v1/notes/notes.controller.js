const svc = require('./notes.service');

const createNote = (data, userId) => {
  return svc.createNote(data, userId);
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
  createNote,
  getNoteForUserID,
  updateNotes,
  getNoteForNoteID
};