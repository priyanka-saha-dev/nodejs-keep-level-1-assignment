let express = require('express');
let app = express();
let modules = require('./modules');
let bodyparser = require('body-parser');
let api = require('./api/v1');

//write your logic here
modules.initializeMongooseConnection();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/api/v1/', api);

module.exports = app;