const connection = require('./db/index');
/* Replace undefined with Require of your Mongoose connection initialization method */
const initializeMongooseConnection = connection.connectToMongo;
/* Replace undefined with Require of your note entity*/
const noteModel = undefined;
/* Replace undefined with Require of your user entity*/
const userModel = undefined;

module.exports = {
	initializeMongooseConnection,
	noteModel,
	userModel
}