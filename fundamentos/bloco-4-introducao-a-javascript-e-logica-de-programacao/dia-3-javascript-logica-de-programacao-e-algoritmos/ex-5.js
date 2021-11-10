const n = 5;
let linhas = [];

for (let l = 1; l <= n / 2 + 1; l += 1) {
    let linha = "";
    for (let c = 1; c <= n; c += 1) {
        if (c >= l && c <= n - l + 1){
            if (c >= l + 1 && c <= n - l + 1) {
                linha += "*";
            }
        } else {
        linha += " ";
        }
    }
    linhas.push(linha);
}

for (let i = 0; i <= linhas.length; i += 1) {
    console.log(linhas[linhas.length - i])
}