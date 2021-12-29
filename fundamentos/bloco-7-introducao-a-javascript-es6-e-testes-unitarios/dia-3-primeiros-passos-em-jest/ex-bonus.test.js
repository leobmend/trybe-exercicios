const searchEmployee = require('./ex-bonus');

describe('Teste a função searchEmployee.', () => {
  it('Testa se a função foi declarada corretamente.', () => {
    expect(searchEmployee).toBeDefined();
    expect(typeof(searchEmployee)).toBe('function');
  });

  it('Testa se a função retorna a informação correta, do profissional correto, conforme cada chamada.', () => {
    expect(searchEmployee('5569-4', 'firstName')).toEqual('George');
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
    expect(searchEmployee('1256-4', 'lastName')).toEqual('Bezos');
  });

  it('Testa se a função retorna "ID não identificada." se o id não for encontrado no quadro de funcionários.', () => {
    expect(searchEmployee('0000-0', 'firstName')).toBe('ID não identificada.');
  })
});