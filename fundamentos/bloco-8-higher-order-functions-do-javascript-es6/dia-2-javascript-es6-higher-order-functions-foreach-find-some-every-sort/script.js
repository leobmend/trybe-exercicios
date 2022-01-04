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