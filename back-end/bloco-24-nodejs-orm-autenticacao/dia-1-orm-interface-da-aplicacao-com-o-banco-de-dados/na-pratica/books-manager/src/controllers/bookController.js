const rescue = require('express-rescue');

const bookService = require('../services/bookService');

const getAll = rescue(async (_req, res, _next) => {
  const books = await bookService.getAll();

  res.status(200).json(books);
});

const getById = rescue(async (req, res, _next) => {
  const { id } = req.params;

  const book = await bookService.getById(id);

  res.status(200).json(book);
});

const create = rescue(async (req, res, _next) => {
  const { title, author, pageQuantity } = req.body;

  const newBook = await bookService.create({ title, author, pageQuantity });

  res.status(201).json(newBook);
});

const update = rescue(async (req, res, _next) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  await bookService.update(id, { title, author, pageQuantity });

  res.status(200).json({ message: `Book id:${id} updated` });
});

const remove = rescue( async (req, res, _next) => {
  const { id } = req.params;

  await bookService.remove(id);

  res.status(204).json({ message: `Book id:${id} deleted` });
});

const bookController = {
  getAll,
  getById,
  create,
  update,
  remove,
};

module.exports = bookController;
