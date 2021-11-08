let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorDeImpares = 0;

for (let number of numbers) {
    if (number % 2 != 0) {
        contadorDeImpares += 1;
    }
}

if (contadorDeImpares == 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(contadorDeImpares)
}
