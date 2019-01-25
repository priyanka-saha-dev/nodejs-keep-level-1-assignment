const router = require('express').Router();
const controller = require('./user.controller');

// router.get('/register', (req, res, next) => {
//   res.status(200).send('OK');
// });

router.post('/login', (req, res, next) => {
  controller.login(req.body).then((response) => {
    res.status(response.status).send(response);
  });
});

router.post('/register', (req, res, next) => {

  console.log("Register user with", req.body);

  controller.register(req.body).then((response) => {
    console.log('Promise resolved');
    res.status(response.status).send(response);
    
  }).catch((error) => {
    console.log('Promise rejected with', error);
  });
});

module.exports = router;