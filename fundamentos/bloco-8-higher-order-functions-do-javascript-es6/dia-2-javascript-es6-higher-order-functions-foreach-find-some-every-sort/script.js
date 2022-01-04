/* 
  1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
*/

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

//emailListInData.forEach(showEmailList);

/* 
  2 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
*/

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find(number => (number % 3 === 0 && number % 5 ===0))

//console.log(findDivisibleBy3And5());

/* 
  3 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
*/

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find(name => name.length === 5)

//console.log(findNameWithFiveLetters());

/* 
  4 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
*/

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some(item => item === name);
}

//console.log(hasName(names2, 'Ana'))

/* 
  5 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
*/

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every(item => item.age >= 18);
}

//console.log(verifyAges(people, 18));