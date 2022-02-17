const service = require('./service')

describe('1-2. Testa a função randomNumber', () => {
  it('Testa se é uma função', () => {
    expect(typeof service.randomNumber).toBe('function')
  });

  it('Testa o retorno da função, se foi chamada e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testa a função randomNumber com implementação alterada', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  })
});

describe('3. Testando implementações', () => {
  test('Testa o mock da função para receber 3 parâmetros e retornar sua multiplicação', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test('Testa o mock da função que recebe um parâmetro e retorna seu dobro', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});
