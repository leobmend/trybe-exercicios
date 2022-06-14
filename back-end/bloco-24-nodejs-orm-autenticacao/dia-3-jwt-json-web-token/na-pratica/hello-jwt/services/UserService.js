const { User } = require('../database/models');

const authenticateLogin = async ({ username, password }) => {
  const user = await User.findOne({ where: { username, password } });

  if (!user) throw { message: 'Credentials don\'t exist' }

  return user;
};

const getByUsername = async (username) => {
  const user = await User.findOne({ where: { username }, attributes: { exclude: ['password'] } });

  return user;
};

const UserService = {
  authenticateLogin,
  getByUsername,
};

module.exports = UserService;
