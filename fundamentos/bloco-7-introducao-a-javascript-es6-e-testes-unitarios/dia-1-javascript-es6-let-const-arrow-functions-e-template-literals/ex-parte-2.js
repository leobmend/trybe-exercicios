/* 
1. Crie uma função que receba um número e retorne seu fatorial.
-Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
-Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/

/* const factorial = number => {
  if (number < 0) {
    console.log("Insira um número maior ou igual a zero!");
  } else if (number === 0) {
    return 1;
  } else {
    let result = number;
    while (number >= 2) {
      number -= 1;
      result *= number;
    }
    return result;
  }
}
console.log(factorial(5)); */

/* 
2. Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

/* const biggerWord = phrase => {
  const wordsList = phrase.split(' ');
  let biggerWord = wordsList[0];
  for (let i = 1; i < wordsList.length; i += 1) {
    if (biggerWord.length < wordsList[i].length) {
      biggerWord = wordsList[i];
    }
  }
  return biggerWord;
}
console.log(biggerWord('Retorna logo a maior palavra dessa frase por favor'));
 */

/* 
3. Crie uma página que contenha:
- Um botão ao qual será associado um event listener ;
- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

const btn = document.querySelector('button');
const counter = document.querySelector('div');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount += 1;
  counter.innerText = clickCount;
})