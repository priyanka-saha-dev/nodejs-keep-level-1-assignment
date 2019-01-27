const router = require('express').Router();
const controller = require('./notes.controller');

router.route('/')
    .all((req, res, next) => {
        next();

    }).get((req, res, next) => {
        res.send('Notes API');

    }).post((req, res, next) => {
        controller.createNote(req.body, req.query.userId).then((response) => {
            console.log('Promise resolved');
            res.status(response.status).send(response);
        }).catch((error) => {
            console.log('Promise rejected with', error);
            res.status(error.status).send(error);
        });
    }).put((req, res, next) => {

    });



module.exports = router;