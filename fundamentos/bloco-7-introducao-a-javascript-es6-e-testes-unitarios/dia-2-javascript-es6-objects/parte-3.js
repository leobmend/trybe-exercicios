const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 
1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

/* function addProperty(object, key, value) {
  object[key] = value;
}
addProperty(lesson2, 'turno', 'noite');
console.log(lesson2) */

/* 
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/

/* function printObjKeys(object) {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(`${i + 1}. ${keys[i]}`)
  }
}
printObjKeys(lesson1) */

/* 
3. Crie uma função para mostrar o tamanho de um objeto.
*/

/* function objectSize(object) {
  console.log(`This object has a total of ${Object.keys(object).length} properties.`)
}
objectSize(lesson3) */

/* 
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
*/

/* function printObjValues(object) {
  const values = Object.values(object);
  for (let i = 0; i < values.length; i += 1) {
    console.log(`${i + 1}. ${values[i]}`);
  }
}
printObjValues(lesson1); */

/* 
5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons).
*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
/* console.log(allLessons); */

/* 
6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
*/

/* function allStudents(object) {
  let studentsTotal = 0;
  for (let lesson in object) {
    studentsTotal += object[lesson].numeroEstudantes;
  }
  return studentsTotal;
}
console.log(allStudents(allLessons)); */

/* 
7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
*/

function getValueByPosition(object, position) {
  let objectKeys = Object.keys(object);
  return object[objectKeys[position]];
}
console.log(getValueByPosition(lesson1, 2));

