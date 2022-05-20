import Author from './Author.js';
import connection from './connection.js';

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
    
  return books.map(serialize);
};

const getById = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE id = ?',
    [id],  
  );

  if (books.length === 0) return null;

  return serialize(books[0]);
}
  
const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    `SELECT id, title, author_id FROM model_example.books
    WHERE author_id = ${authorId}`);

  if (books.length === 0) return null;

  return books.map(serialize);
};

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number' || !(await Author.getById(author_id))) return false;
  
  return true;
};

const create = async (title, authorId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, authorId],
  );
}

const Book = { getAll, getById, getByAuthorId, isValid, create };

export default Book;
