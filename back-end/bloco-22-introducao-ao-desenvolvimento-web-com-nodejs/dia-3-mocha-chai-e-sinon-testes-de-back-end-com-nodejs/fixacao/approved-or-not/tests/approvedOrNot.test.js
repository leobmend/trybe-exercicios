import { expect } from 'chai';

import approvedOrNot from '../approvedOrNot.js';

describe('Quando a média for menor que 7', () => {
  it('retorna "Reprovado!"', () => {
    const resposta = approvedOrNot(4);

		// 'equals' é um assertion, enquanto 'to' e 'be' são getters
    expect(resposta).to.be.equals('Reprovado!');
  });
});