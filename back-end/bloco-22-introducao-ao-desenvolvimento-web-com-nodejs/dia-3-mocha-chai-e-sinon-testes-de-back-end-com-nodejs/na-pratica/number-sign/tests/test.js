import { numberSign } from '../index.js';
import { expect } from 'chai';

describe('numberSign function:', () => {

  describe('If the parameter is a number', () => {

    it('Should return a string', () => {
      const result = numberSign(1);
      expect(result).to.be.a('string');
    });

    it('Should return "positive" when called with a number bigger than 0', () => {
      const result = numberSign(5);
      expect(result).to.be.equals('positive');
    });

    it('Should return "negative" when called with a number smaller than 0', () => {
      const result = numberSign(-5);
      expect(result).to.be.equals('negative');
    });

    it('Should return "positive" when called with 0', () => {
      const result = numberSign(0);
      expect(result).to.be.equals('neutral');
    });

  });

  describe('If the parameters is not a number', () => {
    
    it('Should throw an error', () => {
      expect(() => numberSign('five')).to.throw();
    });

    it('Should have message error equals to "Error: Parameter is not a number!"', () => {
      expect(() => numberSign('five')).to.throw('Error: Parameter is not a number!');
    });
  })
});
