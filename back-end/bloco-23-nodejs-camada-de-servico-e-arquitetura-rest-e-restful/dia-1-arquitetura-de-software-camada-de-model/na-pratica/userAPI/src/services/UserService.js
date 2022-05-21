const rescue = require('express-rescue');
const Joi = require('joi');

const CustomError = require('../../utils/customError');
const UserModel = require('../models/UserModel');

const getFullName = ({ id, firstName, lastName, email, password }) => ({
  id,
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  email,
  password,
});

const addUserSchema = Joi.object(
  {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }
).messages(
  {
    'any.required': 'O campo {#label} é obrigatório',
    'string.min': 'O campo {#label} deve ter, pelo menos, {#limit} caracteres',
    'string.email': 'Informe um email válido no campo {#label}',
  }
);

const add = async (firstName, lastName, email, password) => {
  const { error } = addUserSchema.validate({ firstName, lastName, email, password });
  if (error) {
    error.status = 400;
    throw error;
  };
  
  await UserModel.add(firstName, lastName, email, password);
};

const getAll = async () => {
  const users = await UserModel.getAll();
  
  return users.map(getFullName);
};

const isIdPresent = async (id) => {
  const users = await UserModel.getAll();
  if (users.findIndex(({ id: currId }) => currId === id) === -1) {
    throw new CustomError(404, 'Usuário não encontrado');
  }
};

const getById = async (id) => {
  await isIdPresent(id);

  const user = await UserModel.getById(id);

  return getFullName({ id, ...user });
};

const updateById = async (id, firstName, lastName, email, password) => {
  await isIdPresent(id);

  const { error } = addUserSchema.validate({ firstName, lastName, email, password });
  if (error) {
    error.status = 400;
    throw error;
  };

  await UserModel.updateById(id, firstName, lastName, email, password);
  
  return { id, firstName, lastName, email, password };
};

const removeById = async (id) => {
  await isIdPresent(id);

  await UserModel.removeById(id);
};

const UserService = { add, getAll, getById, updateById, removeById };

module.exports = UserService;
