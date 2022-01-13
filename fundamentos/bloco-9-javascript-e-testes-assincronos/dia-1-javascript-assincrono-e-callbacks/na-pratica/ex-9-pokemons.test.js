// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex-8-pokemons");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function callbackTest(error, _) {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (err) {
        done(err);
      }
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callbackTest);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedMessage = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    function callbackTest(_, result) {
      try {
        expect(result).toEqual(expectedMessage);
        done();
      } catch (err) {
        done(err);
      }
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callbackTest);  
  });
});