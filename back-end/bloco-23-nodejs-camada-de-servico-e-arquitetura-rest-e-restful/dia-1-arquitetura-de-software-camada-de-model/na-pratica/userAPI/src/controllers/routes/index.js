const express = require('express');
const rescue = require('express-rescue');
const routes = express.Router();

const UserService = require('../../services/UserService');

routes.post(
  '/users',
  rescue(async (req, res, _next) => {
    const { firstName, lastName, email, password } = req.body;

    await UserService.add(firstName, lastName, email, password);

    res.status(201).json({ message: 'Usuário adicionado com sucesso' });
  }),
);

routes.get(
  '/users',
  rescue(async (_req, res, _next) => {
    const users = await UserService.getAll();

    res.status(200).json(users);
  }),
);

routes.get(
  '/user/:id',
  rescue(async (req, res, _next) => {
    const { id } = req.params;

    const user = await UserService.getById(id);

    res.status(200).json(user);
  }),
);

routes.put(
  '/user/:id',
  rescue(async (req, res, _next) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const user = await UserService.updateById(id, firstName, lastName, email, password);

    res.status(200).json(user);
  }),
);

routes.delete(
  '/user/:id',
  rescue(async (req, res, _next) => {
    const { id } = req.params;

    await UserService.removeById(id);

    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  }),
);

module.exports = routes;
