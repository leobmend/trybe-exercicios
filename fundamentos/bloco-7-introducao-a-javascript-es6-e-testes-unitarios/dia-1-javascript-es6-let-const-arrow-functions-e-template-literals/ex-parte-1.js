/* 
1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
- Modifique a estrutura da função para que ela seja uma arrow function .
- Modifique as concatenações para template literals .
*/

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if).';
    ifScope = `${ifScope} Ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

//testingScope(true);

/* 
2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados - de forma crescente!".
- Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

let stringNumbers = (oddsAndEvens[0]).toString();
for (let i = 1; i < oddsAndEvens.length; i += 1) {
  stringNumbers = `${stringNumbers}, ${oddsAndEvens[i]}`
}
console.log(`Os números ${stringNumbers} se encontram ordenados de forma crescente!`) */

/*
4. Crie um código JavaScript com a seguinte especificação:
- Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
  Exemplo: String determinada: "Tryber x aqui!"
           Parâmetro: "Bebeto"
           Retorno: "Tryber Bebeto aqui!"
- Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
- Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
  Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
           JavaScript;
           HTML; ... #goTrybe". 
- Não se esqueça de usar template literals
*/

const wichTryber = (name) => `Tryber ${name} reporting for duty!`;
//console.log(wichTryber('Leonardo'));

const mySkillSet = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python'];

const tryberSkillSet = (name, skillSet) => {
  let string = `${wichTryber(name)} My main skills are:`;
  for (let skill of skillSet) {
    string += `\n${skill}`;
  }
  return string;
}

console.log(tryberSkillSet('Leonardo', mySkillSet));
