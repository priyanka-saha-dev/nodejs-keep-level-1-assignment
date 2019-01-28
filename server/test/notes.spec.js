const should = require('chai').should();
const request = require('supertest');
const app = require('../app');
const config = require('./test.config');
var expect = require('chai').expect;

const USER_ID_1 = 'u1';
const USER_ID_2 = 'u2';

const NOTE_1 = {
  id: '001',
  title: 'note1',
  text: 'this is note 1'
}
//  testsuite
describe('Testing to add a note', function () {
  //  testcase
  it('Should handle a request to add a new note for user 1 ', function (done) {
    // Should get added note of user 1 as a respone,  need to match added note text value
    // status = 201
    // response will be added note object

    request(app)
      .post('/api/v1/notes/?userId=u1')
      .send(NOTE_1)
      .expect(201)
      .then((res) => {
        //if (err) return done(err);
        console.log('done');
        
      }).then(() => {
        done();
      }).catch((err) => {
        console.log('not done');
      });
      // .then((resp) => {
      //   console.log('resp.body')
      //   console.log(resp.body.data)
      //   //expect(resp).to.have.status(200);
      //   expect(resp.body.data).to.have.property('id');
      // })

    //done();
  });

  //  testcase
  it('Should handle a request to add a new note for user 2', function (done) {
    // Should get added note of user 2 as a respone,  need to match added note text value
    // status = 201
    // response will be added note object
    done();
  });
});

//  testsuite
describe('Testing to get all notes', function () {
  //  testcase
  it('Should handle a request to get all notes of a user 1', function (done) {
    // Should get all note as a array those are created by user 1 and Should match recently added note text value
    // status = 200
    // response will be a array or all notes those are added by user 1
    done();
  });

  //  testcase
  it('Should handle a request to get all notes of a user 2', function (done) {
    // Should get all note as a array those are created by user 2 and Should match recently added note text value
    // status = 200
    // response will be a array or all notes those are added by user 2
    done();

  });

  //  testcase
  it('Should handle a request to get notes of a user who has not created any note', function (done) {
    // should get blank array
    // status = 200
    // response will be an empty array
    done();
  });
});

//  testsuite
describe('Testing to update a note', function () {
  //  testcase
  it('Should handle a request to update a note by note id', function (done) {
    // Should return updated note and match updated note text value'
    // status = 200
    // response will hold updated note as an object
    done();
  });
});
