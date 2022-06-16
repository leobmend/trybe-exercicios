const chai = require('chai');
const chaiHttp = require('chai-http');
const { before } = require('mocha');
const sinon = require('sinon');

const server = require('../src/api/app');
const { User } = require('../src/models');
const { User: UserMock }  = require('./mock/models');
const usersMock = require('./mock/models/users.json');

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota /api/users/', () => {
  describe('Quando não é passado o token JWT de autenticação', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .get('/api/users/1');
    });

    it('retorna um código de status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto do body', () => {
      expect(response.body).to.be.an('object');
    });
    
    it('objeto de resposta possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui a mensagem "Token não encontrado ou informado"', () => {
      expect(response.body.message).to.be.equal('Token não encontrado ou informado')
    });
  });

  describe('Quando o usuário é autenticado corretamente porém não é administrador', () => {
    let response;
    const userId = 2;
    const userToLogin = usersMock[userId - 1];

    before(async () => {
      sinon.stub(User, 'findOne').callsFake(UserMock.findOne);
      sinon.stub(User, 'findByPk').callsFake(UserMock.findByPk);

      const loginResponse = await chai.request(server)
        .post('/api/login').send(userToLogin);

      response = await chai.request(server)
        .get(`/api/users/`).set('authorization', loginResponse.body.token);
    });

    after(() => {
      User.findOne.restore();
      User.findByPk.restore();
    });

    it('retorna um código de status 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto do body', () => {
      expect(response.body).to.be.an('object');
    });
    
    it('objeto de resposta possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui a mensagem "Acesso negado"', () => {
      expect(response.body.message).to.be.equal('Acesso negado')
    });
  });

  describe('Quando o usuário é autenticado corretamente e é administrador', () => {
    let response;
    const userId = 1;
    const userToLogin = usersMock[userId - 1];

    before(async () => {
      sinon.stub(User, 'findOne').callsFake(UserMock.findOne);
      sinon.stub(User, 'findByPk').callsFake(UserMock.findByPk);
      sinon.stub(User, 'findAll').callsFake(UserMock.findAll);

      const loginResponse = await chai.request(server)
        .post('/api/login').send(userToLogin);

      response = await chai.request(server)
        .get(`/api/users/`).set('authorization', loginResponse.body.token);
    });

    after(() => {
      User.findOne.restore();
      User.findByPk.restore();
    });

    it('retorna um código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um array do body', () => {
      expect(response.body).to.be.an('array');
    });
    
    it('o array possui objetos', () => {
      expect(response.body[0]).to.be.an('object');
    });

    it('os objetos possuem os usernames dos usuários', () => {
      response.body.forEach((responseItem, index) => {
        expect(responseItem.username).to.be.equal(usersMock[index].username);
      });
    });
  });
});
