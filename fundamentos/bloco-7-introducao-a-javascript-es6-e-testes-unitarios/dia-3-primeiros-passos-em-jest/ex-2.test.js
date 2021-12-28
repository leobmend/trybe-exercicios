const myRemove = require('./ex-2');

describe('Testes do exercício 2:', () => {
  
  it('1. Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
 
  it('2. Testa se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('3. Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  
});