import { expect } from 'chai';
import sinon from 'sinon';
import fs from 'fs';

import { readFile } from '../index.js';

const FILE_CONTENT = 'My text to test.';

describe('readFile', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
    });

    after(() => {
      fs.readFileSync.restore();
    });
    
    describe('a resposta', () => {
      const resposta = readFile('./io-files/my-text.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(FILE_CONTENT);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      const resposta = readFile('arquivo_que_nao_existe.txt');

      it('é igual a "null"', () => {
        expect(resposta).to.be.equal(null);
      });
    });
  });
});
