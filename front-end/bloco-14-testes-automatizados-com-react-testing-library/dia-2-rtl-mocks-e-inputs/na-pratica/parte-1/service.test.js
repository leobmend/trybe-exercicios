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

describe('3. Testando implementações da função randomNumber', () => {
  it('Testa o mock da função para receber 3 parâmetros e retornar sua multiplicação', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  it('Testa o mock da função que recebe um parâmetro e retorna seu dobro', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    service.randomNumber.mockImplementation(a => a * 2);
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});

describe('4. Testando implementações para as funções de string', () => {
  it('Testa o mock da função upperCaseString que retorna a string em caixa baixa', () => {
    const mockUpperCaseString = jest.spyOn(service, "upperCaseString" ).mockImplementation(string => string.toLowerCase());    
    expect(mockUpperCaseString('LALALAND')).toBe('lalaland');
    expect(service.upperCaseString).toHaveBeenCalled();
    expect(service.upperCaseString).toHaveBeenCalledTimes(1);
    expect(service.upperCaseString).toHaveBeenCalledWith('LALALAND');
  });

  it('Testa o mock da função firstLetter que retorna a última letra da string', () => {
    service.firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1]);
    expect(service.firstLetter('lalaland')).toBe('d');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('lalaland');
  });

  it('Testa o mock da função concatenateStrings que concatena três strings', () => {
    service.concatenateStrings = jest.fn().mockImplementation((string1, string2, string3) => string1 + string2 + string3);
    expect(service.concatenateStrings('la', 'la', 'land')).toBe('lalaland');
    expect(service.concatenateStrings).toHaveBeenCalled();
    expect(service.concatenateStrings).toHaveBeenCalledTimes(1);
    expect(service.concatenateStrings).toHaveBeenCalledWith('la', 'la', 'land');
  });

  it('Testa a restauração da função upperCaseString', () => {
    service.upperCaseString.mockRestore();
    expect(service.upperCaseString('lalaland')).toBe('LALALAND')
  });
})
