const connection = require('../models/db');

const serialize = (event) => ({
  idOcorrencia: event.id_ocorrencia,
  descricao: event.descricao,
  categoria: event.categoria,
  dataHora: event.data_hora,
  idEndereco: event.id_endereco
});

const getAll = async () => {
  const [events] = await connection.execute(
    'SELECT * FROM `ocorrencias-cidade`.ocorrencias',
  );

  return events.map(serialize);
};

const getById = async (id) => {
  const [event] = await connection.execute(
    'SELECT * FROM `ocorrencias-cidade`.ocorrencias ' +
    'WHERE = ?;',
    [id],
  );

  return event.map(serialize);
};

const add = async (descricao, dataHora, categoria, idEndereco) => {
  const [ row ] = await connection.execute(
    'INSERT INTO `ocorrencias-cidade`.ocorrencias (descricao, categoria, data_hora, id_endereco) ' +
    'VALUES (?, ?, ?, ?);',
    [descricao, categoria, dataHora, idEndereco],
  );

  return {
    idOcorrencia: row.insertId,
    descricao,
    categoria,
    dataHora,
    idEndereco,
  };
}

const EventModel = {
  getAll,
  getById,
  add,
};

module.exports = EventModel;
