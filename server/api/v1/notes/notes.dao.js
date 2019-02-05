const Notes = require('./notes.entity');

const createNote = (data, userId) => {
    //console.log('creating note : ', data);

    return new Promise((resolve, reject) => {

        // if (!data || !data.id || !data.title || !data.text || !userId) {
        //     reject({
        //         message: 'Invalid request',
        //         status: 500
        //     });
        // }

        let note = new Notes(data);

        note.createdOn = new Date();
        note.userId = userId;

        note.save((error, doc) => {
            if (error) {
                if (error.message.includes('duplicate')) {
                    reject({
                        message: 'Note Duplicate.',
                        status: 500
                    });
                } else {
                    reject({
                        message: 'Error while adding notes',
                        status: 500
                    });
                }
                
            } else {
                resolve({
                    message: 'Notes added',
                    status: 201,
                    notes: doc
                });
            }
        })
    });
};

const getNoteForUserID = (userID) => {
    //console.log('getting note for userID : ', userID);

    return new Promise((resolve, reject) => {
        const query = {
            userId: userID
        };
        Notes.find(query, (error, doc) => {
            if (error) {
                reject({
                    message: 'Error while getting notes',
                    status: 500
                });
            } else if (!doc) {
                resolve({
                    message: `No Notes found for userID ${userID}`,
                    status: 200
                });
            } else {
                resolve({
                    message: 'Notes added',
                    status: 200,
                    data: doc
                });
            }
        });
    });
};

const updateNotes = (data, noteid) => {
    //console.log('updating note for noteid : ', noteid);

    return new Promise((resolve, reject) => {
        let query = {
            id: noteid
        };

        data.modifiedOn = new Date();
        let update = {
            $set: data
        };

        let options = {
            new: true
        };

        Notes.findOneAndUpdate(query, update, options, (err, doc) => {
            if (err) {
                reject({
                    message: 'Error while adding notes',
                    status: 500
                });
            } else if (!doc) {
                reject({
                    message: `No document found for NoteID ${noteid}`,
                    status: 500
                });
            } else {
                //console.log('updated doc : ', doc);
                resolve({
                    message: 'Notes updated',
                    status: 200,
                    data: doc
                });
            }
        })
    });

};

const getNoteForNoteID = (noteid) => {
    //console.log('Fetching Notes for noteid : ', noteid);

    return new Promise((resolve, reject) => {
        const query = {
            id: noteid
        };

        Notes.findOne(query, (error, doc) => {
            if (error) {
                reject({
                    message: `Error is getting Notes for noteID ${noteid}`,
                    status: 500
                });
            } else if (!doc) {
                resolve({
                    message: `No Notes found for for noteID ${noteid}`,
                    status: 200
                });
            } else {
                resolve({
                    message: 'Notes found',
                    status: 200,
                    data: doc
                });
            }
        });
    });
}

module.exports = {
    createNote,
    getNoteForUserID,
    updateNotes,
    getNoteForNoteID
}