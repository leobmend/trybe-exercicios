const rescue = require('express-rescue');

const validateLogin = rescue((req, _res, next) => {
  const { username, password } = req.body;

  if (!username) throw { message: 'Username is required' };
  if (!password) throw { message: 'Password is required' };

  if (username.length < 5) throw { message: 'Username must have at least 5 characters' };
  if (password.length < 5) throw { message: 'Password must have at least 5 characters' };

  req.user = { username, password };

  next();
});

module.exports = validateLogin;
