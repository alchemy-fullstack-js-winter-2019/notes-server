const { getNote } = require('../dataHelpers');

const app = require('../../lib/app');
const request = require('supertest');

describe('notes routes', () => {
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

  it('get a list of notes', () => {
    return request(app)
      .get('/notes')
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toHaveLength(5);
      });
  });

  it('get a note by id', async() => {
    const { _id } = await getNote();

    return request(app)
      .get(`/notes/${_id}`)
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toEqual({
          _id,
          title: 'My Note0',
          body: 'My Note 0',
          __v: 0
        });
      });
  });
});
