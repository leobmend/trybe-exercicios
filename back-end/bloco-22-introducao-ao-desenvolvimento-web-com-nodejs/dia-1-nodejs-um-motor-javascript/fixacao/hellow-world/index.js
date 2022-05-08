// O pacote de terceiro readline-sync foi instalado permitindo a leitura do nome e sobrenome da pessoa que executou o script:

const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');

const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);

// Pronto, só utilizar o script "npm start" no terminal para executar nosso pacote!
