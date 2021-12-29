/* Exercício 6
  - A partir dos testes contidos no arquivo ex-6.text.js, construa a função hydrate. 
  - A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. 
    / string recebida
    '1 cerveja'
    / retorno da função
    '1 copo de água'

    / string recebida
    '1 cerveja, 2 shots e 1 catuaba'
    / retorno da função
    '4 copos de água'

    / string recebida
    '2 caipirinhas'
    / retorno da função
    '2 copos de água'
*/

function hydrate(drinksString) {
  let waterCups = 0;
  for (let i = 0; i < drinksString.length; i += 1) {
    if (Number.isInteger(parseInt(drinksString[i]))) {
      waterCups += parseInt(drinksString[i]);
    }
  }
  if (waterCups === 0) {
    return 'Não é preciso beber água!';
  } else if (waterCups === 1) {
    return '1 copo de água';
  } else {
    return `${waterCups} copos de água`;
  }
};

module.exports = hydrate;