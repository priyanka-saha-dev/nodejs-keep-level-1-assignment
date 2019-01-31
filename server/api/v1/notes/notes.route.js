const router = require('express').Router();
const controller = require('./notes.controller');

router.route('/')
    .all((req, res, next) => {
        next(); //delegate

    }).get((req, res, next) => { //API for getting all notes of a user **/api/v1/notes/**

        const userid = req.query.userId;    //**userId** will be passed as **query param**
        controller.getNoteForUserID(userid).then((response) => {
            //console.log(response);
            res.status(response.status).send(response);
        }).catch((error) => {
            //console.log('Promise rejected with', error);
            res.status(error.status).send(error);
        })

    }).post((req, res, next) => {   //API for creating a note **/api/v1/notes/**
        controller.createNote(req.body, req.query.userId).then((response) => {
            res.status(response.status).send(response);
        }).catch((error) => {
            //console.log('Promise rejected with', error);
            res.status(error.status).send(error);
        });
    });

router.route('/:noteId')
    .all((req, res, next) => {
        next(); //delegate

    }).get((req, res, next) => { //API for getting a note **/api/v1/notes/:noteId**

        const noteid = req.params.noteId;   //**noteId** will be passed as route parameters into url
        controller.getNoteForNoteID(noteid).then((response) => {
            res.status(response.status).send(response);
        }).catch((error) => {
            //console.log('Promise rejected with', error);
            res.status(error.status).send(error);
        })

    }).put((req, res, next) => {    //API for updating a note **/api/v1/notes/:noteId**

        const noteid = req.params.noteId;   //**noteId** will be passed as route parameters into url
        controller.updateNotes(req.body, noteid).then((response) => {
            res.status(response.status).send(response);
        }).catch((error) => {
            //console.log('Promise rejected with', error);
            res.status(error.status).send(error);
        })

    });

module.exports = router;