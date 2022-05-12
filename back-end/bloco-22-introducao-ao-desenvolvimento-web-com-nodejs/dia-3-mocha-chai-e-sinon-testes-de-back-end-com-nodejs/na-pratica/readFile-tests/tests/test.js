import { expect } from 'chai';
import sinon from 'sinon';
import fs from 'fs';

import { writeFile } from '../index.js';

describe('writeFile function:', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  })

  after(() => {
    fs.writeFileSync.restore();
  })

  it('Should return "Ok!" after sucess on writing', () => {
    const result = writeFile('my-file.txt', 'Hello world!');
    expect(result).to.be.deep.equals('Ok!');
  });

});
