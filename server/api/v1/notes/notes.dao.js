const Notes = require('./notes.entity');

const createNote = (notesData, userId) => {
    console.log('creating note : ', notesData);

    return new Promise((resolve, reject) => {
        let note = new Notes(notesData);

        note.createdOn = new Date();
        note.userId = userId;

        note.save((error, data) => {
            if (error) {
                reject({
                    message: 'Error while adding notes',
                    status: 500
                });
            } else {
                resolve({
                    message: 'Notes added',
                    status: 200
                });
            }
        })
    });
};

const getNoteForUserID = (userID) => {
    console.log('getting note for userID : ', userID);

    return new Promise((resolve, reject) => {
        const userid = { userID: userID };
        Notes.findOne(userid, (error, data) => {
            if (error) {
                reject({
                    message: 'Error while getting notes',
                    status: 500
                });
            } else if (!data) {
                resolve({
                    message: `No Notes found for userID ${userID}`,
                    status: 200
                });
            } else {
                resolve({
                    message: 'Notes added',
                    status: 200
                });
            }
        });
    });
};

const updateNotes = (data, noteid) => {
    console.log('updating note for noteid : ', noteid);

    return new Promise((resolve, reject) => {
        
    });

};

module.exports = {
    createNote,
    getNoteForUserID
}