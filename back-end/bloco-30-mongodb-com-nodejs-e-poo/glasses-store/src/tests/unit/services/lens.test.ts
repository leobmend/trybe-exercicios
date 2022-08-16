import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import LensModel from '../../../models/Lens';
import LensService from '../../../services/Lens';
import { lensMock, lensMockWithId, lensMockWithIdArray } from '../../mocks/lensMock';

describe('Lens Service', () => {
	const lensModel = new LensModel();
	const lensService = new LensService(lensModel);

	before(() => {
		sinon.stub(lensModel, 'create').resolves(lensMockWithId);
		sinon.stub(lensModel, 'readOne')
			.onCall(0).resolves(lensMockWithId) 
			.onCall(1).resolves(null);
		sinon.stub(lensModel, 'read').resolves(lensMockWithIdArray);
		sinon.stub(lensModel, 'update').resolves(lensMockWithId);
		sinon.stub(lensModel, 'remove')
			.onCall(0).resolves(lensMockWithId)
			.onCall(1).resolves(null);
	})

	after(() => {
		sinon.restore()
	})

	describe('Create Lens', () => {
		it('Success', async () => {
			const lensCreated = await lensService.create(lensMock);

			expect(lensCreated).to.be.deep.equal(lensMockWithId);
		});

		it('Failure', async () => {
			try {
				await lensService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('ReadOne Lens', () => {
		it('Success', async () => {
			const lensCreated = await lensService.readOne(lensMockWithId._id);

			expect(lensCreated).to.be.deep.equal(lensMockWithId);
		});

		it('Failure', async () => {
			try {
				await lensService.readOne(lensMockWithId._id);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Read Lenss', () => {
		it('Success', async () => {
			const lenssFound = await lensService.read();
			expect(lenssFound).to.be.deep.equal(lensMockWithIdArray);
		})
	});

	describe('Update Lens', () => {
		it('Success', async () => {
			const lensUpdated = await lensService.update(lensMockWithId._id, lensMock);

			expect(lensUpdated).to.be.deep.equal(lensMockWithId);
		});

		it('Failure', async () => {
			try {
				await lensService.update(lensMockWithId._id, lensMock);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Delete Lens', () => {
		it('Success', async () => {
			const lensDeleted = await lensService.remove(lensMockWithId._id);

			expect(lensDeleted).to.be.deep.equal(lensMockWithId);
		});

		it('Failure', async () => {
			try {
				await lensService.remove(lensMockWithId._id);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});
});