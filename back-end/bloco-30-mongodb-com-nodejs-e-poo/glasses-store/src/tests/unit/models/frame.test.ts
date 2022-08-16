import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId, frameMockWithIdArray } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
		sinon.stub(Model, 'find').resolves(frameMockWithIdArray);
		sinon.stub(Model, 'findOneAndUpdate').resolves({ ...frameMockWithId, color: 'black' });
		sinon.stub(Model, 'findOneAndDelete').resolves(frameMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('searching all frames', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.read();
			expect(framesFound).to.be.deep.equal(frameMockWithIdArray);
		});
	});

	describe('updating a frame', () => {
		it('successfully updated', async () => {
			const frameUpdated = await frameModel.update(
				'62cf1fc6498565d94eba52cd',
				{ ...frameMock, color: 'black' },
			);
			expect(frameUpdated).to.be.deep.equal(
				{ ...frameMockWithId, color: 'black' },
			);
		});

		it('_id not found', async () => {
			try {
				await frameModel.update('123ERRADO', frameMock);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('deleting a frame', () => {
		it('successfully deleted', async () => {
			const frameRemoved = await frameModel.remove('62cf1fc6498565d94eba52cd');
			expect(frameRemoved).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.remove('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});