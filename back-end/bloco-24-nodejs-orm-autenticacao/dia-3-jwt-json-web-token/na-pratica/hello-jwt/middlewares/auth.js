const rescue = require('express-rescue');

const jwtUtils = require('../utils/jwt');

const auth = rescue((req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) throw { status: 401, message: 'Token not found' };

  const decoded = jwtUtils.decodeToken(token);
  
  req.tokenData = decoded;

  next();
});

module.exports = auth;
