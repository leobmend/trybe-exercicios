const AddressModel = require('../models/AddressModel');
const EventModel = require('../models/EventModel');

const removeIdEndereco = (event) => ({
  idOcorrencia: event.idOcorrencia,
  descricao: event.descricao,
  categoria: event.categoria,
  dataHora: event.dataHora,
  endereco: {
    logradouro: event.endereco.logradouro,
    numero: event.endereco.numero,
    bairro: event.endereco.bairro,
    cep: event.endereco.cep,
  },
});

const getAll = async () => {
  const events = await EventModel.getAll();
  
  const eventsPromises = events.map(async (event) => {
    const [address] = await AddressModel.getById(event.idEndereco);

    return {
      ...event,
      endereco: address,
    };
  });

  const eventsWithAddress = await Promise.all(eventsPromises);

  return eventsWithAddress.map(removeIdEndereco); 
};

const getById = async (id) => {
  const event = await EventModel.getById(id);

  if (!event.length) {
    throw new Error('Id da ocorrência não encontrado');
  }

  const [address] = await AddressModel.getById(event[0].idEndereco);
  const eventWithAddress = {
    ...event[0],
    endereco: address,
  };

  return removeIdEndereco(eventWithAddress);
};

const add = async (descricao, dataHora, categoria, endereco) => {
  const address = await AddressModel.add(endereco);
  
  const event = await EventModel.add(descricao, dataHora, categoria, address.id);

  const response = {
    ...event,
    endereco: {
      ...address,
    },
  };
  delete response.idEndereco;
  delete response.endereco.idEndereco;

  return response;
};

const EventService = {
  getAll,
  getById,
  add,
};

module.exports = EventService;
