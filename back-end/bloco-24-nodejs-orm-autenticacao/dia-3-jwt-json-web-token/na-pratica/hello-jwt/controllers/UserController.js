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

    jwtToken = jwtUtils.generateToken(user);  
  }

  res.status(200).json({ token: jwtToken });
});

const getByUsername = rescue(async (req, res, _next) => {
  const { username } = req.tokenData;

  const user = await UserService.getByUsername(username);

  res.status(200).json(user);
});

const secretPage = rescue(async (req, res, _next) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha' });
});

const UserController = {
  login,
  getByUsername,
  secretPage,
};

module.exports = UserController;
