/* eslint-disable sonarjs/no-duplicate-string */
import { Router } from 'express';

import LensController from '../controllers/Lens';
import LensModel from '../models/Lens';
import LensService from '../services/Lens';

const route = Router();

const lens = new LensModel();
const lensService = new LensService(lens);
const lensController = new LensController(lensService);

route.post('/lens', (req, res) => lensController.create(req, res));
route.get('/lens/:id', (req, res) => lensController.readOne(req, res));
route.get('/lens', (req, res) => lensController.read(req, res));
route.put('/lens/:id', (req, res) => lensController.update(req, res));
route.delete('/lens/:id', (req, res) => lensController.remove(req, res));

export default route;