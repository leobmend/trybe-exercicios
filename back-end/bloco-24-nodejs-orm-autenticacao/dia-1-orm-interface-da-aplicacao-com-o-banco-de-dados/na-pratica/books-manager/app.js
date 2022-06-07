const express = require('express');

const bookRouter = require('./src/routes/bookRouter');
const errorMiddleware = require('./src/middlewares/error');

const app = express();

app.use(express.json());

app.use('/books/', bookRouter);

app.use(errorMiddleware);

module.exports = app;
