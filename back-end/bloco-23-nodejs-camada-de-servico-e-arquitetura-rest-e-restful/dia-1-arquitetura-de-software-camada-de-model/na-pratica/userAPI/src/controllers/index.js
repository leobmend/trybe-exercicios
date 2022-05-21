const express = require('express');
const error = require('./middlewares/error');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(routes);
app.use(error);

module.exports = app;
