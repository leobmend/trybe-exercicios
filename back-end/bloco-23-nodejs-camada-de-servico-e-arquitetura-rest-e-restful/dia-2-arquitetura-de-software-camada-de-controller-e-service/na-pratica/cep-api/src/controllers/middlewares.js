const rescue = require('express-rescue');
const CustomError = require('../utils/customError');
const Joi = require('joi');

const pattern = /\d{5}-?\d{3}/;

const addCepAndAddressSchema = Joi.object({
    cep: Joi.string().regex(pattern).required(),
    logradouro: Joi.string().min(2).required(),
    bairro: Joi.string().min(2).required(),
    localidade: Joi.string().min(2).required(),
    uf: Joi.string().min(2).max(5).required(),
  }).messages({
    'any.required': 'O campo {#label} é obrigatório',
    'string.pattern.base': 'O campo {#label} deve estar no seguinte formato: xxxxx-xxx',
    'string.min': 'O campo {#label} deve ter, pelo menos, {#limit} caracteres',
    'string.max': 'O campo {#label} deve ter, no máximo, {#limit} caracteres',
});

const validateCep = rescue((req, _res, next) => {
  const { cep } = req.params;

  if (!cep.match(pattern)) throw new CustomError('invalidData', 400, 'CEP inválido');

  next();
});

const validateCepAndAddress = rescue((req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const { error } = addCepAndAddressSchema.validate({ cep, logradouro, bairro, localidade, uf });

  if (error) throw new CustomError('invalidData', 400, error.message);

  next();
});

const errorTreatment = (error, _req, res, _next) => {
  res.status(error.status || 500).json({
    error: {
      code: error.code || '',
      message: error.message,
    },
  });
};

module.exports = { validateCep, validateCepAndAddress, errorTreatment };
