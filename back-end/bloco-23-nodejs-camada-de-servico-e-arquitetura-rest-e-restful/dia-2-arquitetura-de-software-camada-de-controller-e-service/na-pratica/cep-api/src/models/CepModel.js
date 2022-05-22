const connection = require('./db');

const get = async (cep) => {
  const [address] = await connection.execute(
    'SELECT * from cep_api.ceps WHERE cep = ?',
    [cep],
  );

  return address;
};

const add = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute(
    'INSERT INTO cep_api.ceps (cep, logradouro, bairro, localidade, uf) ' +
    'VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );
}

const CepModel = {
  get,
  add,
}

module.exports = CepModel;
