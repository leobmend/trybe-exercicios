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

const create = async (user) => {
  const isNewUser = (await User.findOne({ where: { username: user.username }}) === null);

  if (!isNewUser) throw { status: 409, message: 'User already exists' };

  const newUser = await User.create(user);
  delete newUser.password;

  return newUser;
};

const manageAdmin = async (username, isAdmin) => {
  const user = await User.findOne({ where: { username }, attributes: { exclude: ['password'] } });

  if (!user) throw { status: 404, message: 'User not found' };

  const [ updatedRows ] = await User.update({ admin: isAdmin }, { where: { id: user.id }});

  return {
    ...user.dataValues,
    admin: isAdmin,
  };
};

const UserService = {
  authenticateLogin,
  getByUsername,
  create,
  manageAdmin,
};

module.exports = UserService;
