import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';
import middleware from './middlewares/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(middleware.error);

app.listen(3001, () => {
  console.log('Application running on port 3001')
});
