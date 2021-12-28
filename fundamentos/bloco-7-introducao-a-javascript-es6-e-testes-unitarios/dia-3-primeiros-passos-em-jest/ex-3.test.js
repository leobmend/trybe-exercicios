const myFizzBuzz = require('./ex-3');

describe('Testes do exercício 3:', () => {

  it('1. Testa uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('2. Testa uma chamada com um número divisível por 3 e verifica se o retorno é o esperado.', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('3. Testa uma chamada com um número divisível por 5 e verifica se o retorno é o esperado.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('4. Testa uma chamada com um número não divisível por 3 e/ou 5 e verifica se o retorno é o esperado.', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });

  it('5. Testa uma chamada com um parâmetro que não é um número e verifica se o retorno é o esperado.', () => {
    expect(myFizzBuzz('teste')).toBe(false);
  });
});