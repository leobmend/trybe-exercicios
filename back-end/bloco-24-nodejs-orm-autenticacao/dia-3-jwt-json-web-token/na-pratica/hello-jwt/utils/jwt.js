const jwt = require('jsonwebtoken');

require('dotenv').config();
const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (user, isAdmin = false) => (
  jwt.sign({ username: user.username, admin: isAdmin }, secret, jwtConfig)
);

const decodeToken = (token) => jwt.verify(token, secret);

const jwtUtils = {
  generateToken,
  decodeToken,
};

module.exports = jwtUtils;
