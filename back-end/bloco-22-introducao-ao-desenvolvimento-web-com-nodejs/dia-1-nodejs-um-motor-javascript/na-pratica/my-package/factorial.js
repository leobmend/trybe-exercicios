const readline = require('readline-sync');

const number = readline.questionInt('Selecione um número para calcular seu fatorial: ');

let factorial = 1;
for (let i = number; i != 0; i -= 1) {
  factorial = factorial * i;
}

console.log(`O factorial de ${number} é igual à ${factorial}!`);
