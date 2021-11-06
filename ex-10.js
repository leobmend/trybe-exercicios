const valorCusto = 57;
const valorVenda = 75;
const imposto = 0.2;

let valorLucro;

if (valorCusto < 0) {
    console.log("Valores negativos não são válidos!")
} else if (valorVenda < 0) {
    console.log("Valores negativos não são válidos!")
} else {
    let valorCustoTotal = valorCusto * (1 + imposto)
    valorLucro = valorVenda - valorCustoTotal
    console.log(valorLucro)
}
