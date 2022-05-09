const readline = require('readline-sync');

const hint = readline.questionInt('Chute um número! ');

const raffleNumber = Math.floor(Math.random() * 10 + 1);

if (hint === raffleNumber) {
  console.log('Parabéns! Você acertou o número sorteado.');
} else {
  console.log(`Quem sabe na próxima? O número sorteado foi o ${raffleNumber}!`);
}
