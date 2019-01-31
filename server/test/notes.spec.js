const should = require('chai').should();
const request = require('supertest');
const app = require('../app');
const config = require('./test.config');
const expect = require('chai').expect;

const USER_ID_1 = 'u1';
const USER_ID_2 = 'u2';
const USER_ID_3 = 'u3';

const NOTE_1 = {
  id: '001',
  title: 'note1',
  text: 'this is note 1'
}

const NOTE_2 = {
  id: '002',
  title: 'note2',
  text: 'this is note 2'
}

//  testsuite
describe('Testing to add a note', function () {
  //  testcase
  it('Should handle a request to add a new note for user 1 ', function (done) {
    // Should get added note of user 1 as a respone,  need to match added note text value
    // status = 201
    // response will be added note object

    request(app)
      .post(`/api/v1/notes/?userId=${USER_ID_1}`)
      .send(NOTE_1)
      .expect(201)
      .then((response) => {
        //console.log(response.body.data)
        expect(response.body.data.id).to.equal(NOTE_1.id);
        expect(response.body.data.title).to.equal(NOTE_1.title);
        expect(response.body.data.text).to.equal(NOTE_1.text);
        expect(response.body.data.userId).to.equal(USER_ID_1);
        done();
      });

    //done();
  });

  //  testcase
  it('Should handle a request to add a new note for user 2', function (done) {
    // Should get added note of user 2 as a respone,  need to match added note text value
    // status = 201
    // response will be added note object

    request(app)
      .post(`/api/v1/notes/?userId=${USER_ID_2}`)
      .send(NOTE_2)
      .expect(201)
      .then((response) => {
        //console.log(response.body.data)
        expect(response.body.data.id).to.equal(NOTE_2.id);
        expect(response.body.data.title).to.equal(NOTE_2.title);
        expect(response.body.data.text).to.equal(NOTE_2.text);
        expect(response.body.data.userId).to.equal(USER_ID_2);
        done();
      });

    //done();
  });
});

//  testsuite
describe('Testing to get all notes', function () {
  //  testcase
  it('Should handle a request to get all notes of a user 1', function (done) {
    // Should get all note as a array those are created by user 1 and Should match recently added note text value
    // status = 200
    // response will be a array or all notes those are added by user 1

    request(app)
      .get(`/api/v1/notes/?userId=${USER_ID_1}`)
      .expect(200)
      .then((response) => {
        //console.log(response.body.data[0]);
        expect(response.body.data).to.be.an('array');
        expect(response.body.data[0].id).to.equal(NOTE_1.id);
        expect(response.body.data[0].title).to.equal(NOTE_1.title);
        expect(response.body.data[0].text).to.equal(NOTE_1.text);
        expect(response.body.data[0].userId).to.equal(USER_ID_1);
        done();
      }).catch((error) => {
        done(error);
      });

    //done();
  });

  //  testcase
  it('Should handle a request to get all notes of a user 2', function (done) {
    // Should get all note as a array those are created by user 2 and Should match recently added note text value
    // status = 200
    // response will be a array or all notes those are added by user 2

    request(app)
      .get(`/api/v1/notes/?userId=${USER_ID_2}`)
      .expect(200)
      .then((response) => {
        //console.log(response.body.data[0]);
        expect(response.body.data).to.be.an('array');
        expect(response.body.data[0].id).to.equal(NOTE_2.id);
        expect(response.body.data[0].title).to.equal(NOTE_2.title);
        expect(response.body.data[0].text).to.equal(NOTE_2.text);
        expect(response.body.data[0].userId).to.equal(USER_ID_2);
        done();
      }).catch((error) => {
        done(error);
      });

    //done();

  });

  //  testcase
  it('Should handle a request to get notes of a user who has not created any note', function (done) {
    // should get blank array
    // status = 200
    // response will be an empty array

    request(app)
      .get(`/api/v1/notes/?userId=${USER_ID_3}`)
      .expect(200)
      .then((response) => {
        //console.log(response.body.data[0]);
        expect(response.body.data).to.be.an('array');
        expect(response.body.data.length).to.equal(0);
        done();
      }).catch((error) => {
        done(error);
      });

    //done();
  });
});

//  testsuite
describe('Testing to update a note', function () {
  //  testcase
  it('Should handle a request to update a note by note id', function (done) {
    // Should return updated note and match updated note text value'
    // status = 200
    // response will hold updated note as an object

    const nextText = 'This is new text of Note 1.'
    NOTE_1.text = nextText;

    request(app)
      .put(`/api/v1/notes/${NOTE_1.id}`)
      .send(NOTE_1)
      .expect(200)
      .then((response) => {
        //console.log(response.body.data)
        expect(response.body.data.id).to.equal(NOTE_1.id);
        expect(response.body.data.title).to.equal(NOTE_1.title);
        expect(response.body.data.text).to.equal(nextText);
        expect(response.body.data.userId).to.equal(USER_ID_1);
        done();
      });

    //done();
  });
});
