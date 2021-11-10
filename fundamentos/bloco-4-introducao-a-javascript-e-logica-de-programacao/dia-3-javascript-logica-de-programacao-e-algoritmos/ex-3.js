const n = 5;

for (let l = 1; l <= n; l += 1) {
    let linha = "";
    for (let c = 1; c <= n; c += 1) {
        if (c - l >= n + 1 - 2*l){
            linha += "*";
        } else {
        linha += " ";
        }
    }
    console.log(linha);
}

