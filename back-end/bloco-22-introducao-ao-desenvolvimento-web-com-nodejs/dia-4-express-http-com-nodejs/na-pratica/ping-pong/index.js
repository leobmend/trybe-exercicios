import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001');
});
