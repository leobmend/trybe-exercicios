const sinon = require("sinon");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

const EventModel = require('../../src/models/EventModel');
const AddressModel = require('../../src/models/AddressModel');
const EventService = require('../../src/services/EventService');

describe('Testa o EventService', () => {

  describe('se o método "getAll"', () => {  
    it('retorna um array vazio quando não há ocorrências cadastradas', async () => {
      sinon.stub(EventModel, 'getAll').resolves([]);

      const response = await EventService.getAll();

      expect(response).to.be.an('array');
      expect(response).to.be.empty;

      EventModel.getAll.restore();
    });

    it('retorna um array contendo objetos com as informações de todas as ocorrências cadastradas', async () => {
      const listOfEvents = [
        { idOcorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01', idEndereco: 1 },
        { idOcorrencia: 2, descricao: 'Sequestro teste', categoria: 'Testes', dataHora: '2022-01-02', idEndereco: 2 },
      ];
      const listOfAddress = [
        { idEndereco: 1, logradouro: 'Rua teste', numero: 10, bairro: 'Testadouro', cep: '11111-111' },
        { idEndereco: 2, logradouro: 'Rua mocks', numero: 20, bairro: 'Testadouro', cep: '22222-222' },
      ];

      sinon.stub(EventModel, 'getAll').resolves(listOfEvents);
      sinon.stub(AddressModel, 'getById')
        .onFirstCall().resolves([listOfAddress[0]])
        .onSecondCall().resolves([listOfAddress[1]]);

      const response = await EventService.getAll();

      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal([
        {
          idOcorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01',
          endereco: {
            logradouro: 'Rua teste', numero: 10, bairro: 'Testadouro', cep: '11111-111',
          },
        },
        {
          idOcorrencia: 2, descricao: 'Sequestro teste', categoria: 'Testes', dataHora: '2022-01-02',
          endereco: {
            logradouro: 'Rua mocks', numero: 20, bairro: 'Testadouro', cep: '22222-222',
          },
        },
      ]);

      EventModel.getAll.restore();
      AddressModel.getById.restore();
    });
  });

  describe('se o método "getById"', () => {    
    const ID_TO_SEARCH = 1;
    
    it('lança um erro com a mensagem "Id da ocorrência não encontrado", quando não existir ocorrência com o id desejado', () => {
      sinon.stub(EventModel, 'getById').resolves([]);

      return expect(EventService.getById(ID_TO_SEARCH))
        .to.eventually.be.rejected.and.property('message', 'Id da ocorrência não encontrado');
    });

    it('retorna um objeto com as informações da ocorrência desejada', async () => {
      const listOfEvents = [
        { idOcorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01', idEndereco: 1 },
      ];
      const listOfAddress = [
        { idEndereco: 1, logradouro: 'Rua teste', numero: 10, bairro: 'Testadouro', cep: '11111-111' },
      ];

      EventModel.getById.restore();
      sinon.stub(EventModel, 'getById').resolves(listOfEvents);
      sinon.stub(AddressModel, 'getById').resolves(listOfAddress);

      const response = await EventService.getById(ID_TO_SEARCH);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal({
        idOcorrencia: 1, descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01',
        endereco: {
          logradouro: 'Rua teste', numero: 10, bairro: 'Testadouro', cep: '11111-111',
        },
      });

      EventModel.getById.restore();
      AddressModel.getById.restore();
    });
  });

  describe('se o método "add"', () => {
    it('retorna um objeto com as informações da ocorrência adiciona em conjunto do seu id de registro', async () => {
      const eventToAdd = { descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01' };
      const addressToAdd = { logradouro: 'Rua teste', numero: 10, bairro: 'Testadouro', cep: '11111-111' };

      sinon.stub(EventModel, 'add').resolves({
        idOcorrencia: 1,
        ...eventToAdd,
        idEndereco: 1,
      });
      sinon.stub(AddressModel, 'add').resolves({
        idEndereco: 1,
        ...addressToAdd,
      });

      const response = await EventService.add({
        ...eventToAdd,
        endereco: addressToAdd,
      });

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal({
        idOcorrencia: 1,
        ...eventToAdd,
        endereco: addressToAdd,
      });

      EventModel.add.restore();
      AddressModel.add.restore();
    });
  });
});
