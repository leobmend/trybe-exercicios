const EventService = require('../services/EventService');

const getAll = async (_req, res, next) => {
  try {
    const events = await EventService.getAll();

    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await EventService.getById(parseInt(id));

    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { descricao, dataHora, categoria, endereco } = req.body;
    
    const event = await EventService.add(descricao, dataHora, categoria, endereco);

    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};

const EventController = {
  getAll,
  getById,
  add,
}

module.exports = EventController;
