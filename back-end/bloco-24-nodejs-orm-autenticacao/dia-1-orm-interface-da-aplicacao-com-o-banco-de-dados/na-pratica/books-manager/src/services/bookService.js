const { Book } = require('../models');

const CustomError = require('../utils/customError');

const getAll = async () => {
  const books = await Book.findAll();
  
  if (!books.length) throw new CustomError(404, 'There are no books registered');

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) throw new CustomError(404, 'Book not found');

  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [ updatedRows ] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );
  
  if (!updatedRows) throw new CustomError(404, `Book id:${id} not found`);
};

const remove = async (id) => {
  const deletedRows = await Book.destroy(
    { where: { id } },
  );

  if (!deletedRows) throw new CustomError(404, `Book id:${id} not found`);
};

const bookService = {
  getAll,
  getById,
  create,
  update,
  remove,
};

module.exports = bookService;
