const searchEmployee = require('./ex-bonus');

describe('Teste a função searchEmployee.', () => {
  it('Testa se a função foi declarada corretamente.', () => {
    expect(searchEmployee).toBeDefined();
    expect(typeof(searchEmployee)).toBe('function');
  });

  it('Testa se a chamada searchEmployee("5569-4", "firstName") retorna a informação correta, "George".', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
  });
});