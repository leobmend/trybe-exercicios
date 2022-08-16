/* eslint-disable sonarjs/no-duplicate-string */
import { Router } from 'express';
import FrameController from '../controllers/Frame';
import FrameModel from '../models/Frame';
import FrameService from '../services/Frame';

const route = Router();

const frame = new FrameModel();
const frameService = new FrameService(frame);
const frameController = new FrameController(frameService);

route.post('/frames', (req, res) => frameController.create(req, res));
route.get('/frames/:id', (req, res) => frameController.readOne(req, res));
route.get('/frames', (req, res) => frameController.read(req, res));
route.put('/frames/:id', (req, res) => frameController.update(req, res));
route.delete('/frames/:id', (req, res) => frameController.remove(req, res));

export default route;