const service = require('./service')

describe('1. Testa a função randomNumber', () => {
  it('Testa se é uma função', () => {
    expect(typeof service.randomNumber).toBe('function')
  });

  it('Testa o retorno da função, se foi chamada e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});
