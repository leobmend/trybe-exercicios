const sum = require('./ex-1');

describe('Testes do exercício 1:', () => {
  
  it('1. Testa se o retorno de sum(4, 5) é 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('2. Testa se o retorno de sum(0, 0) é 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('3. Testa se a função lança um erro quando os parâmetros são 4 e "5" (string 5).', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });

  it('4. Testa se a mensagem de erro é "parameters must be numbers" quando realiza a chamada sum(4, "5").', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});