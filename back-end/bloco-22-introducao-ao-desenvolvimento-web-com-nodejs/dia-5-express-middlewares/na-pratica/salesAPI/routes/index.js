import { Router } from 'express';

import middleware from '../middlewares/index.js';
import generateToken from '../utils/generateToken.js';

const routes = Router();

routes.post(
  '/sales', 
  middleware.authorization,
  middleware.salesVerification,
  function(req, res) {
    const { productName, infos } = req.body;

    res.status(201).json({ message: 'Sale successfully registered' })
  },
);

routes.post(
  '/signup',
  middleware.signupVerification,
  function(req, res) {
    const { email, password, firstName, phone } = req.body;

    res.status(201).json({ token: generateToken() });
  }
);

export default routes;
