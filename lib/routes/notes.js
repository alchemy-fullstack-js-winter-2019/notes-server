const { Router } = require('express');
const Note = require('../models/Note');
const ensureAuth = require('../middleware/ensureAuth');

module.exports = Router()
  .post('/', ensureAuth(), (req, res, next) => {
    const { title, body } = req.body;
    const author = req.user.nickname;
    Note
      .create({ author, title, body })
      .then(note => res.send(note))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Note
      .find()
      .lean()
      .then(notes => res.send(notes))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;

    Note
      .findById(id)
      .lean()
      .then(note => res.send(note))
      .catch(next);
  })

  .put('/:id', ensureAuth(), (req, res, next) => {
    const { id } = req.params;
    const { title, body } = req.body;

    Note
      .findOneAndUpdate({
        _id: id,
        author: req.user.username
      }, { title, body }, { new: true })
      .lean()
      .then(note => res.send(note))
      .catch(next);
  });
