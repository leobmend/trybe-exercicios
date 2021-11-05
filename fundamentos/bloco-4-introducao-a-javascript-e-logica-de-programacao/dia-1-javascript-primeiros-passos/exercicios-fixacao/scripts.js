/* Variáveis */

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
    
/* Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas */

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

console.log("\n")

console.log(typeof patientAge);

console.log("\n")

patientId = '50';
console.log(typeof patientId);

console.log("\n")

/* Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8. */

const base = 5;
let height = 8;
console.log(base + " x " + height)

/* Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações! */

console.log("\n")
const area = base * height;
console.log(area)

/* Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo. */

console.log("\n")
const perimeter = 2 * base + 2 * height;
console.log(perimeter)
