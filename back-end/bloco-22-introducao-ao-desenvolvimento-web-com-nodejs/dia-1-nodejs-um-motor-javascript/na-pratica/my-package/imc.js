// const weight = 85;
// const height = 1.91;

const readline = require('readline-sync');

const imcCategoriesThresholds = {
  'Abaixo do peso (magreza)' : 18.5,
  'Peso normal': 24.9,
 	'Acima do peso (sobrepeso)': 29.9,
  'Obesidade grau I': 34.9,
  'Obesidade grau II': 39.9,
  'Obesidade graus III e IV': '+',
}

const weight = readline.questionInt('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

const imc = Math.round(weight / Math.pow(height, 2));

let imcCategory = '';

Object.values(imcCategoriesThresholds).forEach((threshold, index) => {
  if (!imcCategory.length && threshold === '+') {
    imcCategory = Object.keys(imcCategoriesThresholds)[index];
  } else if (!imcCategory.length && imc < threshold) {
    imcCategory = Object.keys(imcCategoriesThresholds)[index];
  }
});

console.log(`\nO IMC de uma pessoa com peso igual à ${weight}kgs e ${height} metros de altura, é igual à ${imc}.`);

console.log(`Segundo a classificação padrão do IMC, esta pessoa está classificada como:\n>> ${imcCategory} `);
