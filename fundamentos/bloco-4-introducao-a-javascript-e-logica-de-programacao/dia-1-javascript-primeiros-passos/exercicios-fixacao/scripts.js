/* VARIÀVEIS */

const myName = "Leonardo"
const birthCity = "Anápolis"
let birthYear = 1994

console.log(myName)
console.log(birthCity)
console.log(birthYear)

console.log("\n")

birthYear = 2030

console.log(birthYear)

console.log("\n")

/* 
birthCity = "Tokio"
console.log(birthCity)
    O erro TypeError: Assignment to constant variable indica que tentamos alterar o valor definida para a constante birthCity anteriormente. E, por ser uma constante, não é acecito tal ação.*/
    
/* TIPOS PRIMITIVOS, TIPAGEM DINÂMICA E OPERAÇÔES ARITMÈTICAS */

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

console.log("\n");

console.log(typeof patientAge);

console.log("\n");

patientId = '50';
console.log(typeof patientId);

console.log("\n");

/* 1. Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8. */

const base = 5;
let height = 8;
console.log(base + " x " + height);

/* 2. Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações! */

console.log("\n")
const area = base * height;
console.log(area)

/* 3. Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo. */

console.log("\n");
const perimeter = 2 * base + 2 * height;
console.log(perimeter);

/* CONDIÇÔES IF E ELSE */

/* 1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100; */

console.log("\n");
const nota = 75;
console.log(nota);

/* 2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)" 
3. Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.*/

console.log("\n")
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada");
} 
else if(nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)");
}
    
/* 4. Altere o valor da nota para verificar se as condições que você implementou funcionam; */

console.log("\n");
const nota2 = 50;
console.log("\n")
if (nota2 >= 80) {
    console.log("Parabéns, você foi aprovada");
} 
else if(nota2 < 80 && nota2 >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)");
}
