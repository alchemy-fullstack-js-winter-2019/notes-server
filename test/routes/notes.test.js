require('dotenv').config();

const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const app = require('../../lib/app');
const request = require('supertest');

describe('notes routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a new note when posted to', () => {
    return request(app)
      .post('/notes')
      .send({ title: 'My Note', body: 'Notes are hard to write' })
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'My Note',
          body: 'Notes are hard to write',
          __v: 0
        });
      });
  });
});
