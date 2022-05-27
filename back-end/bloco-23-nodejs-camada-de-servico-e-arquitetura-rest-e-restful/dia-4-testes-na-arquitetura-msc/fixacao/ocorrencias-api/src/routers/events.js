const express = require('express');
const events = express.Router();

const EventController = require('../controllers/EventController');
const error = require('../controllers/middlewares/error');

events.get(
  '/ocorrencias',
  EventController.getAll,
);

events.get(
  '/ocorrencias/:id',
  EventController.getById,
);

events.post(
  '/ocorrencias',
  EventController.add,
);

events.use(error);

module.exports = events;