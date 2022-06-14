const express = require('express');
const apiRouter = require('./router');

const PORT = process.env.SERVER_PORT || 3001;

const app = express();

app.use(express.json());
app.use(apiRouter);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
