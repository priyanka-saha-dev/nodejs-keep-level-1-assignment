const noteModel = require('./notes.entity');
const uuidv1 = require('uuid/v1');

// handels to insert newly created note into the database
const createNote = (userId, note) => {
  
  return new Promise((resolve, reject) => {
    let newNote = new noteModel({
      id : uuidv1(),
      title : note.title,
      text : note.text,
      userId : userId
    });

    // newNote.id = uuidv1();
    // newNote.title = note.title;
    // newNote.text = note.text;
    // newNote.userId = userId;

    newNote.save((err, note) => {
      if(err) {
        logger.error(err);
        reject({
          message: 'Internal Server Error', 
          status: 500
        });
      } else {
        resolve({
          note: note, 
          message: 'Note is added successfully', 
          status:201
        });
      }
    });
});
};

// const addNote = (note, userId) => {
//     //logger.debug('Inside note.dao addNote method');
//     return new Promise((resolve, reject) => {
//       let newNote = new noteModel();
//       newNote.id = uuidv1();
//       newNote.title = note.title;
//       newNote.text = note.text;
//       newNote.userId = userId;
//       newNote.save((err, note) => {
//         if(err) {
//           //logger.error(err);
//           reject({message: 'Internal Server Error', status: 500});
//         } else {
//           resolve({note: note, message: 'Note is added successfully', status:201});
//         }
//       });
//   });

//     //console.log('creating note : ', data);

//     // return new Promise((resolve, reject) => {

//     //     let note = new Notes({
//     //         id: uuidv1(),
//     //         title: noteInfo.title,
//     //         text: noteInfo.text,
//     //         state: noteInfo.state,
//     //         userId: userId
//     //     });

//     //     note.save((error, addedNote) => {
//     //         if (error) {
//     //             if (error.message.includes('duplicate')) {
//     //                 reject({
//     //                     message: 'Note Duplicate.',
//     //                     status: 500
//     //                 });
//     //             } else {
//     //                 reject({
//     //                     message: 'Error while adding notes',
//     //                     status: 500
//     //                 });
//     //             }

//     //         } else {
//     //             resolve({
//     //                 message: 'Notes added',
//     //                 status: 201,
//     //                 note: addedNote
//     //             });
//     //         }
//     //     })
//     // });
// };

// const getNoteForUserID = (userID) => {
//     // console.log('getting note for userID : ', userID);

//     return new Promise((resolve, reject) => {

//         let noteToFind = new Notes({
//             userId: userID
//         });
//         // console.log('note', noteToFind);

//         noteToFind.findByUserId((error, notes) => {
//             if (error) {
//                 reject({
//                     message: 'Error while getting notes',
//                     status: 500
//                 });
//             } else if (!notes) {
//                 resolve({
//                     message: `No Notes found for userID ${userID}`,
//                     status: 200
//                 });
//             } else {
//                 resolve({
//                     message: 'Notes added',
//                     status: 200,
//                     notes: notes
//                 });
//             }
//         });
//     });
// };

// const updateNotes = (note, noteid) => {
    
//     return new Promise((resolve, reject) => {

//         let editedNote = new Notes({
//             title: note.title,
//             text: note.text,
//             state: note.state,
//             id: noteid
//         });

//         editedNote.findAndUpdateNote((err, note) => {

//             console.log('err', err);
//             if (err) {
//                 reject({
//                     message: 'Error while adding notes',
//                     status: 500
//                 });
//             } else if (!note) {
//                 reject({
//                     message: `No document found for NoteID ${noteid}`,
//                     status: 500
//                 });
//             } else {
//                 //console.log('updated doc : ', doc);
//                 resolve({
//                     message: 'Notes updated',
//                     status: 200,
//                     note: note
//                 });
//             }
//         })
//     });

// };

// const getNoteForNoteID = (noteid) => {
//     //console.log('Fetching Notes for noteid : ', noteid);

//     return new Promise((resolve, reject) => {
//         const query = {
//             id: noteid
//         };

//         Notes.findOne(query, (error, note) => {
//             if (error) {
//                 reject({
//                     message: `Error is getting Notes for noteID ${noteid}`,
//                     status: 500
//                 });
//             } else if (!note) {
//                 resolve({
//                     message: `No Notes found for for noteID ${noteid}`,
//                     status: 200
//                 });
//             } else {
//                 resolve({
//                     message: 'Notes found',
//                     status: 200,
//                     note: note
//                 });
//             }
//         });
//     });
// }

// module.exports = {
//     addNote,
//     getNoteForUserID,
//     updateNotes,
//     getNoteForNoteID
// }


module.exports = {
  createNote
     }