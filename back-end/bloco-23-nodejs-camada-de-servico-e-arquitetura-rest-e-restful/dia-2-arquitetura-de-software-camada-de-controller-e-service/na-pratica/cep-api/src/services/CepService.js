const axios = require('axios');

const ViaCepApiModel = require('../models/ViaCepApiModel');
const CepModel = require('../models/CepModel');
const CustomError = require('../utils/customError');

const get = async (cep) => {
  let address = await CepModel.get(cep);
  
  if (!address.length) {
    address = [await ViaCepApiModel.get(cep)];
  }

  if (!address) throw new CustomError('notFound', 404, 'CEP não encontrado');

  return address[0];
};

const add = async (cep, logradouro, bairro, localidade, uf) => {
  const address = await CepModel.get(cep);

  if (address.length) throw new CustomError('alreadyExists', 409, 'CEP já existente');
  
  await CepModel.add(cep, logradouro, bairro, localidade, uf);
};

const CepService = {
  get,
  add,
};

module.exports = CepService;
