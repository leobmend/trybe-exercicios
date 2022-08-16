import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import frameRouter from './routes/frame';
import lensRouter from './routes/lens';

const app = express();
app.use(express.json());
app.use(frameRouter);
app.use(lensRouter);
app.use(errorHandler);

export default app;