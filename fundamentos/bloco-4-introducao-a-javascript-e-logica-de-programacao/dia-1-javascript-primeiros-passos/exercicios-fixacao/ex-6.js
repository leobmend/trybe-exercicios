const peca = "peão";

switch (peca) {
    case "bispo":
        console.log("diagonais");
        break;
    case "cavalo":
        console.log("movimento em L")
        break;
    case "peão":
        console.log("horizontal e vertical, 1 casa")
        break;
    case "torre":
        console.log("horizontal e vertical")
    case "rainha":
        console.log("todas as direções")
        break;
    case "rei":
        console.log("todas as direções, 1 casa")
        break;
    default:
        console.log("não é uma peça de xadrez")
}