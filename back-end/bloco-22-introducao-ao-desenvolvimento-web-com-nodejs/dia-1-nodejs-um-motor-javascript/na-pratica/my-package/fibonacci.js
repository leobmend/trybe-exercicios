const readline = require('readline-sync');

const quantity = readline.questionInt('Selecione quantos elementos da sequência '
  + 'de Fibonacci deseja ver: '
);

const fibonacci = [];

for (let i = 1; i <= quantity; i += 1) {
  if (i === 1) { 
    fibonacci.push(0); 
  } else if (i === 2) {
    fibonacci.push(1);
  } else {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 3]);
  }
}

console.log(fibonacci)
