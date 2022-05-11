import question from "./question.js";

function main() {

  const fizzBuzz = (number) => {
        
    const promise = new Promise((resolve, reject) => {

      if (!Number.isInteger(number) || number < 0) reject('O número inserido não é inteiro maior que zero!')

      if (number % 3 === 0 && number % 5 === 0) resolve('FizzBuzz')
      else if (number % 3 === 0) resolve('Fizz')
      else if (number % 5 === 0) resolve('Buzz')
      else reject(number)

    });

    return promise;
  };

  question('Digite um número inteiro maior que zero: ').then((number) => fizzBuzz(Number(number))
    .then((result) => console.log(result))
    .catch((message) => console.log(message))
  ).catch((message) => console.log(message));

}

main();
