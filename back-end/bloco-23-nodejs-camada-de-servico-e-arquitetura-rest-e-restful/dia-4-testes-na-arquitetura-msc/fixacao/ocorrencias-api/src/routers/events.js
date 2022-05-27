const express = require('express');
const events = express.Router();

const EventController = require('../controllers/EventController');
const error = require('../controllers/middlewares/error');

events.get(
  '/',
  EventController.getAll,
);

events.get(
  '/:id',
  EventController.getById,
);

events.post(
  '/',
  EventController.add,
);

events.use(error);

module.exports = events;