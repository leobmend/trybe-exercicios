// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';


const booksController = new BooksController();

const booksSlashId = '/books/:id';

const router = Router();

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;