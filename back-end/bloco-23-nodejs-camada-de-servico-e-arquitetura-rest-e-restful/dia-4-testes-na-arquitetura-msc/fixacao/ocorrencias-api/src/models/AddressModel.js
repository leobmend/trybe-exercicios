const connection = require('../models/db');

const serialize = (address) => ({
  idEndereco: address.id_endereco,
  logradouro: address.logradouro,
  numero: address.numero,
  bairro: address.bairro,
  cep: address.cep,
});

const add = async (endereco) => {
  const { logradouro, numero, bairro, cep } = endereco;

  const [ row ] = await connection.execute(
    'INSERT INTO `ocorrencias-cidade`.endereco (logradouro, numero, bairro, cep) ' +
    'VALUES (?, ?, ?, ?)',
    [logradouro, numero, bairro, cep],
  );

  return {
    id: row.insertId,
    ...endereco,
  };
};

const getById = async (id) => {
  const [address] = await connection.execute(
    'SELECT * FROM `ocorrencias-cidade`.endereco ' +
    'WHERE = ?;',
    [id],
  );

  return address.map(serialize);
};

const getByCompleteAddress = async (logradouro, numero, bairro, cep) => {
  const [address] = await connection.execute(
    'SELECT * FROM `ocorrencias-cidade`.endereco ' +
    'WHERE logradouro=? AND numero=? AND bairro=? AND cep=?',
    [logradouro, numero, bairro, cep],
  );

  return address.map(serialize);
}

const AddressModel = {
  add,
  getById,
  getByCompleteAddress,
};

module.exports = AddressModel;
