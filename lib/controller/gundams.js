const { Router } = require('express');
const Gundam = require('../models/Gundam');

module.exports = new Router()
  .post('/', (req, res, next) => {
    Gundam
      .insert(req.body)
      .then(gundam => res.send(gundam))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Gundam
      .find()
      .then(gundams => res.send(gundams))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Gundam
      .findById(req.params.id)
      .then(gundam => res.send(gundam))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Gundam
      .update(req.params.id, req.body)
      .then(gundam => res.send(gundam))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Gundam
      .delete(req.params.id)
      .then(gundam => res.send(gundam))
      .catch(next);
  });