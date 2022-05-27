const { expect } = require('chai');
const sinon = require('sinon');

const EventController = require('../../src/controllers/EventController');
const EventService = require('../../src/services/EventService');

describe('Testa o EventController', () => {
  const response = {};
  const request = {};

  describe('se o método getAll', () => {
    it('chama o status 200 e chama o metodo "json" com um array contendo as ocorrências existentes', async() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub();

      const listOfEvents = [{
        idOcorrencia: 1,descricao: 'Assalto teste', categoria: 'Testes', dataHora: '2022-01-01',
        endereco: { logradouro: 'Rua teste', numero: 10, bairro: 'Testadouro', cep: '11111-111' },
      }];

      sinon.stub(EventService, 'getAll').resolves(listOfEvents)

      await EventController.getAll(request, response);
      
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(listOfEvents)).to.be.equal(true);

      EventService.getAll.restore();
    });
  });
});
