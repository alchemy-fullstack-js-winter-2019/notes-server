require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');
const Note = require('../lib/models/Note');

const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData(5);
});

afterAll(() => {
  return mongoose.connection.close();
});

const getNote = () => {
  return Note
    .findOne({ title: 'My Note0' })
    .then(note => {
      return JSON.parse(JSON.stringify(note));
    });
};

module.exports = {
  getNote
};
