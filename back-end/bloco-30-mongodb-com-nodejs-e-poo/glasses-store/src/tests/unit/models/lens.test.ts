import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId, lensMockWithIdArray } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
		sinon.stub(Model, 'find').resolves(lensMockWithIdArray);
		sinon.stub(Model, 'findOneAndUpdate').resolves({ ...lensMockWithId, degree: 7 });
		sinon.stub(Model, 'findOneAndDelete').resolves(lensMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a lens', () => {
		it('successfully created', async () => {
			const newLens = await lensModel.create(lensMock);
			expect(newLens).to.be.deep.equal(lensMockWithId);
		});
	});

	describe('searching a lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
			expect(lensFound).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('searching all lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.read();
			expect(lensFound).to.be.deep.equal(lensMockWithIdArray);
		});
	});

	describe('updating a lens', () => {
		it('successfully updated', async () => {
			const lensUpdated = await lensModel.update(
				'62cf1fc6498565d94eba52cd',
				{ ...lensMock, degree: 7 },
			);
			expect(lensUpdated).to.be.deep.equal(
				{ ...lensMockWithId, degree: 7 },
			);
		});

		it('_id not found', async () => {
			try {
				await lensModel.update('123ERRADO', lensMock);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('deleting a lens', () => {
		it('successfully deleted', async () => {
			const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
			expect(lensDeleted).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
			try {
				await lensModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});