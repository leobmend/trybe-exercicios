const valorSalarioBruto = 3000;
let valorSalarioLiquido;
console.log("Salário bruto de: ", valorSalarioBruto);

let valorINSS;
if (valorSalarioBruto > 5189.82) {
    valorINSS = 570.88;
} else if (valorSalarioBruto > 2594.92) {
    valorINSS = 0.11 * valorSalarioBruto;
} else if (valorSalarioBruto > 1556.94) {
    valorINSS = 0.09 * valorSalarioBruto;
} else {
    valorINSS = 0.08 * valorSalarioBruto;
}
console.log("O valor do INSS será de: ", valorINSS)

valorSalarioLiquido = valorSalarioBruto - valorINSS;
let valorIR;
if (valorSalarioLiquido > 4664.68) {
    valorIR = valorSalarioLiquido * 0.275 - 869.36;
} else if (valorSalarioLiquido > 3751.05) {
    valorIR = valorSalarioLiquido * 0.225 - 636.13;
} else if (valorSalarioLiquido > 2826.65) {
    valorIR = valorSalarioLiquido * 0.15 - 354.80;
} else if (valorSalarioLiquido > 1903.98) {
    valorIR = valorSalarioLiquido * 0.075 - 142.80;
} else {
    valorIR = 0;
}
console.log("O valor do IR será de: ", valorIR)

valorSalarioLiquido = valorSalarioLiquido - valorIR;
console.log("\nO valor do salário líquido será de: ", valorSalarioLiquido)
