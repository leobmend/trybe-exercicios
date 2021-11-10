/* 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. */

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let k in names) {
    console.log("olá", names[k])
}

/* 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto. */

console.log()

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (const k in car) {
    console.log(k, car[k])
}