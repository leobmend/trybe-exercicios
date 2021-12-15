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

function addProperty(object, key, value) {
  object[key] = value;
}
addProperty(lesson2, 'turno', 'Noite');
console.log(lesson2)

/* 
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/

function printObjKeys(object) {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(`${i + 1}. ${keys[i]}`)
  }
}
printObjKeys(lesson1)