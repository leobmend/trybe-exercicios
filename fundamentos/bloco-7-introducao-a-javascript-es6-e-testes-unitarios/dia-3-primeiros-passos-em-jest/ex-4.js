// Funções retiradas diretamente do projeto Playground Function - Trybe Turma XP-B

function encode(string) {
  // Foram utilizados os dois links a seguir como pesquisa base para conclusão do código a seguir:
  // https://www.tabnine.com/academy/javascript/how-to-get-an-objects-keys-and-values/ e https://stackoverflow.com/questions/5754712/add-characters-to-a-string-in-javascript
  let dict = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newString = '';
  for (let character of string) {
    if (Object.keys(dict).includes(character)) {
      newString = newString.concat(dict[character]);
    } else {
      newString = newString.concat(character);
    }
  }
  return newString;
}

function decode(string) {
  // Foram utilizados os dois links a seguir como pesquisa base para conclusão do código a seguir:
  // https://www.tabnine.com/academy/javascript/how-to-get-an-objects-keys-and-values e https://stackoverflow.com/questions/5754712/add-characters-to-a-string-in-javascript
  let dict = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newString = '';
  for (let character of string) {
    if (Object.keys(dict).includes(character)) {
      newString = newString.concat(dict[character]);
    } else {
      newString = newString.concat(character);
    }
  }
  return newString;
}

module.exports = {encode, decode};