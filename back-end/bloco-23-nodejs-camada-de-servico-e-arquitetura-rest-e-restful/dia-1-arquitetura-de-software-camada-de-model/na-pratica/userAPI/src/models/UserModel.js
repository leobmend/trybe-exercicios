const connection = require('./db');

const serialize = ({ id, first_name, last_name, email, password }) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
});

const add = async (firstName, lastName, email, password) => {
  await connection.execute(
    'INSERT INTO user_api.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
};

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM user_api.users',
  );

  return users.map(serialize);
};

const getById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM user_api.users WHERE id = ?',
    [id],
  );

  return serialize(user[0]);
};

const updateById = async (id, firstName, lastName, email, password) => {
  await connection.execute(
    'UPDATE user_api.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName || 'first_name', lastName || 'last_name', email || 'email', password || 'password', id],
  );
};

const removeById = async (id) => {
  await connection.execute(
    'DELETE FROM user_api.users WHERE id = ?',
    [id],
  );
};

const UserModel = { add, getAll, getById , updateById, removeById };

module.exports = UserModel;
