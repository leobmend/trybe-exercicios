const rescue = require('express-rescue');
require('dotenv').config(0);

const UserService = require('../services/UserService');
const jwtUtils = require('../utils/jwt');

const adminPassword = process.env.ADM_PASSWORD

const login = rescue(async (req, res, _next) => {
  let jwtToken = '';

  if (req.user.username === 'admin' && req.user.password === adminPassword) {
    jwtToken = jwtUtils.generateToken(req.user, true);
  } else {
    const user = await UserService.authenticateLogin(req.user);

    jwtToken = jwtUtils.generateToken(user, user.admin);  
  }

  res.status(200).json({ token: jwtToken });
});

const getByUsername = rescue(async (req, res, _next) => {
  const { username } = req.tokenData;

  const user = await UserService.getByUsername(username);

  res.status(200).json(user);
});

const secretPage = rescue(async (_req, res, _next) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha' });
});

const signUp = rescue(async (req, res, _next) => {
  const newUser = await UserService.create(req.user);

  jwtToken = jwtUtils.generateToken(newUser);  

  res.status(200).json({ user: newUser, token: jwtToken })
});

const manageAdmin = rescue(async (req, res, _next) => {
  const { admin: requestIsAdmin } = req.tokenData;

  if (!requestIsAdmin) throw { status: 403, message: 'Restricted access'};

  const { username } = req.params;
  const { isAdmin } = req.body;

  const userUpdated = await UserService.manageAdmin(username, isAdmin);

  res.status(201).json(userUpdated);
});

const UserController = {
  login,
  getByUsername,
  secretPage,
  signUp,
  manageAdmin,
};

module.exports = UserController;
