const axios = require('axios');

const get = async (cepSeached) => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cepSeached}/json/`);
  const { cep, logradouro, bairro, localidade, uf } = data;

  return { cep, logradouro, bairro, localidade, uf };
};

const ViaCepApiModel = {
  get,
};

module.exports = ViaCepApiModel;
