const sinon = require("sinon");
const { expect } = require('chai');

const connection = require('../../src/models/db');
const AddressModel = require("../../src/models/AddressModel");

describe('Testa o método "add" do AddressModel', () => {
  const INSERTED_ID = 1;
  const addresToAdd = {
    logradouro: 'Rua Teste',
    numero: 20,
    bairro: 'Testadores',
    cep: 11111-111,
  };

  before(() => {
    sinon.stub(connection, 'execute').resolves([{ insertId: INSERTED_ID }]);
  });

  after(() => {
    connection.execute.restore();
  })
  
  it('se o retorno é um objeto com o endereço adicionado', async () => {
    const response = await AddressModel.add(addresToAdd);

    expect(response).to.be.deep.equal({
      ...addresToAdd,
      id: INSERTED_ID,
    });
  });
});