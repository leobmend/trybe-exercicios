const sinon = require("sinon");
const { expect } = require('chai');

const connection = require('../../src/models/db');
const EventModel = require('../../src/models/EventModel');

describe('Testa o EventModel', () => {
  describe('se o método "add"', () => {
    const INSERTED_ID = 1;
    const eventToAdd = {
      descricao: 'Acidente teste',
      dataHora: '2000-01-01 00:00:00',
      categoria: 'Testes',
      idEndereco: 1,
    };

    before(() => {
      sinon.stub(connection, 'execute').resolves([{ insertId: INSERTED_ID }]);
    });

    after(() => {
      connection.execute.restore();
    });
    
    it('retorna um objeto com a ocorrência adicionada', async () => {
      const response = await EventModel.add(...Object.values(eventToAdd));

      expect(response).to.be.deep.equal({
        ...eventToAdd,
        idOcorrencia: INSERTED_ID,
      });
    });
  });

  describe('se o método "getAll"', () => {  
    it('retorna um array vazio quando não há ocorrências cadastradas', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);

      const response = await EventModel.getAll();

      expect(response).to.be.an('array');
      expect(response).to.be.empty;

      connection.execute.restore();
    });

    it('retorna um array contendo objetos com as informações de todas as ocorrências cadastradas', async () => {
      const listOfEvents = [
        { id_ocorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', data_hora: '2022-01-01', id_endereco: 1 },
        { id_ocorrencia: 2, descricao: 'Sequestro teste', categoria: 'Testes', data_hora: '2022-01-02', id_endereco: 2 },
      ];
      const listOfEventsCammelCase = [
        { idOcorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01', idEndereco: 1 },
        { idOcorrencia: 2, descricao: 'Sequestro teste', categoria: 'Testes', dataHora: '2022-01-02', idEndereco: 2 },
      ];
      sinon.stub(connection, 'execute').resolves([listOfEvents]);

      const response = await EventModel.getAll();

      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(listOfEventsCammelCase);

      connection.execute.restore();
    });
  });

  describe('se o método "getById"', () => {  
    it('retorna um array vazio quando há ocorrência pesquisada não existe', async () => {
      const ID_TO_SEARCH = 1;
      const event = [];
      sinon.stub(connection, 'execute').resolves([event]);

      const response = await EventModel.getById(1);

      expect(response).to.be.an('array');
      expect(response).to.be.empty;

      connection.execute.restore();
    });

    it('retorna um array contendo o objeto com as informações da ocorrências pesquisada', async () => {
      const ID_TO_SEARCH = 1;
      const event = [{ id_ocorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', data_hora: '2022-01-01', id_endereco: 1 }];
      const eventCammelCase = [{ idOcorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01', idEndereco: 1 }];
      sinon.stub(connection, 'execute').resolves([event]);

      const response = await EventModel.getById();

      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(eventCammelCase);

      connection.execute.restore();
    });
  });
});