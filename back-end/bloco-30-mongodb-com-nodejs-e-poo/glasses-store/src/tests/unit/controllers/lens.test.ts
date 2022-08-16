import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { lensMock, lensMockWithId, lensMockWithIdArray } from '../../mocks/lensMock';
import LensController from '../../../controllers/Lens';
import LensService from '../../../services/Lens';
import LensModel from '../../../models/Lens';


describe('Lens Controller', () => {
  const lensModel = new LensModel()
  const lensService = new LensService(lensModel);
  const lensController = new LensController(lensService);
  // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
  const req = {} as Request; 
  // o mesmo acontece com o segundo parâmetro
  const res = {} as Response;

  before(() => {
    sinon.stub(lensService, 'create').resolves(lensMock);
    sinon.stub(lensService, 'readOne').resolves(lensMock);
    sinon.stub(lensService, 'read').resolves(lensMockWithIdArray);
    sinon.stub(lensService, 'update').resolves(lensMockWithId);
    sinon.stub(lensService, 'remove').resolves(lensMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Lens', () => {
    it('Success', async () => {
      req.body = lensMock;
      await lensController.create(req, res);
      // o cast de `res.status` é feito pois `res` foi criado como do tipo `Resquest` 
      // e agora, que queremos validar com o que foi chamado, precisar ser tratado como um `sinon.SinonStub`
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMock)).to.be.true;
    });
  });

  describe('ReadOne Lens', () => {
    it('Success', async () => {
      // como fizemos o dublê da service o valor do `req.params.id` não vai chegar na model
      // logo ele só precisa ser um string e existir
      req.params = { id: lensMockWithId._id };
      await lensController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMock)).to.be.true;
    });
  });

  describe('Read Lens', () => {
    it('Success', async () => {
      await lensController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMockWithIdArray)).to.be.true;
    });
  });

  describe('Update Lens', () => {
    it('Success', async () => {
      req.params = { id: lensMockWithId._id };
      req.body = lensMock;
      await lensController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMockWithId)).to.be.true;
    });
  });

  describe('Remove Lens', () => {
    it('Success', async () => {
      req.params = { id: lensMockWithId._id };
      await lensController.remove(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMockWithId)).to.be.true;
    });
  });
});