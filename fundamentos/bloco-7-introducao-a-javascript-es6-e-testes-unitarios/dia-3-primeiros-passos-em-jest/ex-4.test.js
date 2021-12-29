const plgFunctions = require('./ex-4');

describe('Testes do exercício 4:', () => {
  
  it('1. Testa se encode e decode são funções.', () => {
    expect(typeof(plgFunctions.encode)).toBe('function');
    expect(typeof(plgFunctions.decode)).toBe('function');
  });
  
  it('2. Testa para a função encode, se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.', () => {
    expect(plgFunctions.encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('3. Testa para a função decode, se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(plgFunctions.decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('4. Testa se as demais letras/números não são convertidos para cada caso.', () => {
    expect(plgFunctions.encode('b, c, d, f, g, h -- m, n, p, q, r, t')).toBe('b, c, d, f, g, h -- m, n, p, q, r, t');
    expect(plgFunctions.decode('0, 6, 7, 8, 9')).toBe('0, 6, 7, 8, 9');
  });

  it('5. Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(plgFunctions.encode('Lets go play with some functions!').length).toBe('Lets go play with some functions!'.length);
    expect(plgFunctions.decode("M1yb2 th2 c4d2 3ns't w4rk3ng 1s w2 th45ght.").length).toBe("M1yb2 th2 c4d2 3ns't w4rk3ng 1s w2 th45ght.".length);
  });

});