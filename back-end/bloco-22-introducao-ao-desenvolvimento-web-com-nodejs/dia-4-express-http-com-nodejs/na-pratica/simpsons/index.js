import express from 'express';
import cors from 'cors';

import authorization from './middlewares/authentication.js';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(authorization);
app.use(routes);

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001');
});
