const a = 42;
const b = 555;
const c = 89;

let soma;

 if (a > 0) {
    soma = soma + a;
    if (b > 0) {
        soma = soma + b;
        if (c > 0) {
            soma = soma + c;
            if (soma = 180) {
                console.log("È um triângulo!");
            } else {
                console.log("Não é um triângulo.");
            }  
        } else {
            console.log("Valores negativos não são aceitos");
        }
    } else {
        console.log("Valores negativos não são aceitos.");
    }
} else {
    console.log("Valores negativos não são aceitos");
}
