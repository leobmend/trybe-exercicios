const readline = require('readline-sync');

const distance = readline.questionInt('Quantos metros foram percorridos? ');
const time = readline.questionInt('Quanto tempo foi gasto? ');

const speed = (distance / time).toFixed(2);

console.log(`A velocidade média durante o percurso foi de ${speed} m/s.`);
