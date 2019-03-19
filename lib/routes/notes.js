const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { title, body } = req.body;
    Note
      .create({ title, body })
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

  .put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { title, body } = req.body;

    Note
      .findByIdAndUpdate(id, { title, body }, { new: true })
      .lean()
      .then(note => res.send(note))
      .catch(next);
  });
